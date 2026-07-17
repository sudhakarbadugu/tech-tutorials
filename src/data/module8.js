export const module8 = {
  'canary-deployment': {
    title: 'Canary Deployment',
    sections: [
      {
        heading: 'What is Canary Deployment?',
        text: 'Canary deployment is a release strategy where a new version is rolled out to a small subset of users first. If no issues are found, the new version is gradually rolled out to more users until it reaches 100%. This limits the blast radius of bad deployments.',
        list: [
          '<strong>Gradual rollout:</strong> 1% → 5% → 25% → 50% → 100% with monitoring at each stage',
          '<strong>Automatic rollback:</strong> If error rate or latency spikes, traffic reverts to the old version',
          '<strong>Metrics-driven:</strong> Monitor error rate, p99 latency, conversion rate before proceeding',
          '<strong>Traffic shifting:</strong> Use load balancer weights or feature flags to route a percentage of traffic',
          '<strong>Quick comparison:</strong> Canary vs control — compare metrics in real-time'
        ]
      },
      {
        heading: 'Canary Deployment Flow',
        diagram: `graph LR
    subgraph "Stage 1: 1% Canary"
        LB[Load Balancer] -->|99%| Old[Old Version v1]
        LB -->|1%| Canary[New Version v2]
        Monitor[Metrics Monitor] -->|Check| LB
    end
    
    subgraph "Stage 2: 25% Canary"
        LB2[Load Balancer] -->|75%| Old2[Old Version v1]
        LB2 -->|25%| Canary2[New Version v2]
    end
    
    subgraph "Stage 3: 100% or Rollback"
        LB3[Load Balancer] -->|100%| Final[New Version v2]
        LB4[Load Balancer] -->|100%| Rollback[Old Version v1]
    end
    
    Monitor -->|Healthy| LB2
    Monitor -->|Unhealthy| LB4`,
        text: 'Traffic shifts gradually from old to new version. At each stage, metrics are checked. If healthy, proceed to the next stage. If unhealthy, rollback to the old version.'
      },
      {
        heading: 'Code Example: Canary Traffic Shifter',
        code: `import time
import random

class CanaryDeployer:
    def __init__(self, version_old, version_new):
        self.versions = {version_old: 100, version_new: 0}
        self.stages = [1, 5, 25, 50, 100]
        self.metrics = {'errors': 0, 'requests': 0}

    def shift_traffic(self, percentage, new_version):
        old_version = [v for v in self.versions if v != new_version][0]
        self.versions[new_version] = percentage
        self.versions[old_version] = 100 - percentage
        print(f'  Traffic: {old_version}={100-percentage}% | {new_version}={percentage}%')

    def check_metrics(self):
        """Simulate metric check for canary."""
        error_rate = self.metrics['errors'] / max(self.metrics['requests'], 1)
        print(f'  Error rate: {error_rate:.2%} ({self.metrics["errors"]}/{self.metrics["requests"]})')
        return error_rate < 0.01  # < 1% error rate = healthy

    def simulate_requests(self, count, canary_pct):
        self.metrics = {'errors': 0, 'requests': count}
        for _ in range(count):
            if random.randint(1, 100) <= canary_pct:
                # New version has slightly higher error rate
                if random.random() < 0.015:
                    self.metrics['errors'] += 1
            else:
                if random.random() < 0.005:
                    self.metrics['errors'] += 1

    def deploy(self, new_version):
        print(f'Canary deployment: {new_version}')
        for stage in self.stages:
            self.shift_traffic(stage, new_version)
            self.simulate_requests(1000, stage)
            if self.check_metrics():
                print(f'  -> Stage {stage}%: HEALTHY, proceeding')
            else:
                print(f'  -> Stage {stage}%: UNHEALTHY, rolling back!')
                self.shift_traffic(0, new_version)
                return False
        print(f'  -> Deployment complete: 100% {new_version}')
        return True

deployer = CanaryDeployer('v1.0', 'v2.0')
deployer.deploy('v2.0')`,
        output: 'Gradually shifts traffic to v2.0. If error rate exceeds 1% at any stage, rolls back to v1.0.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Google — progressive canary for Search.</strong> Google uses canary deployments for Search updates. A new version first serves 0.1% of traffic to a subset of data centers. Automated canary analysis (using statistical comparison of error rates, latency, and user engagement) decides whether to proceed. Google\'s Borg system can roll back within 90 seconds if anomalies are detected. This protects billions of daily searches from bad deployments.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Canary = gradual rollout (1% → 5% → 25% → 50% → 100%)',
          'Monitor error rate, latency, business metrics at each stage',
          'Automatic rollback if metrics degrade beyond threshold',
          'Limits blast radius — only a small % of users affected by bad releases'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What metrics should you monitor during canary? → Error rate, p99/p95 latency, throughput, and business metrics (conversion rate, revenue).',
          'Q2: How is canary different from A/B testing? → Canary tests for safety (no errors, no latency regression). A/B tests for feature effectiveness (does the new feature improve engagement?).',
          'Q3: What is the rollback time for canary? → Near-instant — just shift traffic weights back to 100% old version. No redeployment needed since the old version is still running.'
        ]
      }
    ]
  },
  'blue-green': {
    title: 'Blue-Green Deployment',
    sections: [
      {
        heading: 'What is Blue-Green Deployment?',
        text: 'Blue-green deployment maintains two identical production environments (blue and green). Only one serves live traffic at a time. To deploy, you release the new version to the idle environment, test it, then switch traffic. If issues arise, you switch back instantly.',
        list: [
          '<strong>Two environments:</strong> Blue (live) and Green (idle) — both identical infrastructure',
          '<strong>Instant switch:</strong> Update load balancer to point from blue to green — zero downtime',
          '<strong>Instant rollback:</strong> Switch traffic back to the previous environment if issues found',
          '<strong>Full cutover:</strong> All traffic switches at once (unlike canary\'s gradual shift)',
          '<strong>Resource cost:</strong> Requires 2x infrastructure (both environments must be running)'
        ]
      },
      {
        heading: 'Blue-Green Deployment Architecture',
        diagram: `graph TB
    subgraph "Before: Blue is Live"
        LB1[Load Balancer] -->|100%| BlueV1[Blue: v1.0<br/>LIVE]
        GreenV2[Green: v2.0<br/>IDLE]
    end
    
    subgraph "After: Green is Live"
        LB2[Load Balancer] -->|100%| GreenV2b[Green: v2.0<br/>LIVE]
        BlueV1b[Blue: v1.0<br/>IDLE - backup]
    end
    
    subgraph "Rollback if needed"
        LB3[Load Balancer] -->|100%| BlueV1c[Blue: v1.0<br/>LIVE AGAIN]
    end
    
    LB1 -->|Deploy v2 to Green| GreenV2
    GreenV2 -->|Test| Test{Tests pass?}
    Test -->|Yes| LB2
    Test -->|No| LB1
    LB2 -->|Issues?| LB3`,
        text: 'Blue serves traffic while Green is updated with the new version. After testing Green, switch the load balancer. If problems arise, switch back to Blue instantly.'
      },
      {
        heading: 'Code Example: Blue-Green Manager',
        code: `class BlueGreenDeploy:
    def __init__(self):
        self.environments = {
            'blue': {'version': 'v1.0', 'is_live': True, 'healthy': True},
            'green': {'version': None, 'is_live': False, 'healthy': None}
        }
        self.live = 'blue'
        self.standby = 'green'

    def deploy(self, new_version):
        """Deploy new version to standby environment."""
        env = self.environments[self.standby]
        env['version'] = new_version
        print(f'  Deployed {new_version} to {self.standby}')
        return self.test()

    def test(self):
        """Run health checks on standby."""
        env = self.environments[self.standby]
        # Simulate health check
        env['healthy'] = True
        print(f'  Health check on {self.standby} ({env["version"]}): PASS')
        return env['healthy']

    def switch(self):
        """Switch traffic from live to standby."""
        if not self.environments[self.standby]['healthy']:
            print(f'  Cannot switch — {self.standby} is not healthy')
            return False
        self.environments[self.live]['is_live'] = False
        self.environments[self.standby]['is_live'] = True
        old_live = self.live
        self.live, self.standby = self.standby, self.live
        print(f'  Switched: {self.live} is now LIVE ({self.environments[self.live]["version"]})')
        print(f'  {self.standby} is now STANDBY ({self.environments[self.standby]["version"]})')
        return True

    def rollback(self):
        """Switch back to the previous environment."""
        print('  ROLLBACK initiated!')
        self.switch()

# Deploy v2.0
bg = BlueGreenDeploy()
print('Initial state: blue=v1.0 (live), green=empty')
bg.deploy('v2.0')
bg.switch()
print('\\nAfter deploy: green=v2.0 (live), blue=v1.0 (standby)')
print('\\nIssue detected! Rolling back...')
bg.rollback()`,
        output: 'Deploy v2.0 to green, test, switch traffic to green. On issue, switch back to blue instantly.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Amazon — blue-green for retail deployments.</strong> Amazon uses blue-green deployments for their retail platform. During Prime Day, they keep the previous version running in the blue environment as a safety net. If the new green version has issues, they switch traffic back in under 30 seconds. The extra infrastructure cost (~2x) is justified by the near-zero downtime and instant rollback capability during their highest-traffic event of the year.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Blue-green = two identical environments, switch traffic between them',
          'Zero downtime — switch is just a load balancer config change',
          'Instant rollback — switch back to the previous environment',
          'Cost: requires 2x infrastructure (both environments running)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: When is blue-green better than canary? → When you need instant rollback and full cutover (all users at once). Canary is better for gradual, risk-minimized rollouts.',
          'Q2: What about database migrations in blue-green? → Schema changes must be backward-compatible. Use expand-and-contract pattern: add new columns (both versions work), then remove old ones after cutover.',
          'Q3: What is the main cost tradeoff? → 2x infrastructure cost during deployment, but you save on debugging downtime, incident response, and lost revenue from bad releases.'
        ]
      }
    ]
  },
  'feature-flags': {
    title: 'Feature Flags',
    sections: [
      {
        heading: 'What are Feature Flags?',
        text: 'Feature flags (feature toggles) are a technique that lets you turn features on or off without deploying new code. They decouple release from deployment, allowing you to ship code with hidden features and activate them independently — per user, per segment, or globally.',
        list: [
          '<strong>Release flags:</strong> Hide incomplete code in production — activate when ready',
          '<strong>Experiment flags:</strong> A/B test features on a percentage of users',
          '<strong>Ops flags:</strong> Toggle features for operational reasons (degrade gracefully)',
          '<strong>Permission flags:</strong> Enable features for specific users (beta, enterprise)',
          '<strong>Kill switch:</strong> Instantly disable a problematic feature without rollback'
        ]
      },
      {
        heading: 'Feature Flag System Architecture',
        diagram: `graph TB
    App[Application] -->|Check flag| FFService[Feature Flag Service]
    FFService --> Rules[Rules Engine]
    Rules -->|User segment| Seg[Segment: beta users]
    Rules -->|Percentage| Pct[30% rollout]
    Rules -->|Environment| Env[Prod vs Staging]
    Rules -->|Kill switch| Kill[Instant off]
    
    FFService --> Store[(Flag Config Store)]
    Admin[Admin Dashboard] -->|Toggle| Store
    
    App -->|flag=on| FeatureA[New Feature]
    App -->|flag=off| FeatureB[Old Feature]
    
    style FFService fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'The application checks the flag service before executing feature code. Rules engine evaluates conditions (user segment, percentage, environment). Admins can toggle flags in real-time via dashboard without code deployment.'
      },
      {
        heading: 'Code Example: Feature Flag System',
        code: `import hashlib
import json

class FeatureFlagSystem:
    def __init__(self):
        self.flags = {}

    def create_flag(self, name, enabled=False, rules=None):
        self.flags[name] = {
            'enabled': enabled,
            'rules': rules or {}
        }

    def evaluate(self, flag_name, user_id=None, context=None):
        flag = self.flags.get(flag_name)
        if not flag or not flag['enabled']:
            return False

        rules = flag['rules']
        
        # Percentage rollout
        if 'percentage' in rules:
            pct = rules['percentage']
            hash_val = int(hashlib.md5(f'{flag_name}:{user_id}'.encode()).hexdigest(), 16)
            return (hash_val % 100) < pct
        
        # User allowlist
        if 'users' in rules and user_id in rules['users']:
            return True
        
        # Environment check
        if 'environment' in rules:
            env = context.get('environment') if context else None
            return env == rules['environment']
        
        # Global on
        return flag['enabled']

    def toggle(self, flag_name, enabled):
        if flag_name in self.flags:
            self.flags[flag_name]['enabled'] = enabled
            print(f'  Flag "{flag_name}" -> {"ON" if enabled else "OFF"}')

# Setup flags
ff = FeatureFlagSystem()
ff.create_flag('new_checkout', enabled=True, rules={'percentage': 30})
ff.create_flag('beta_dashboard', enabled=True, rules={'users': ['user_1', 'user_2']})
ff.create_flag('dark_mode', enabled=False)

# Evaluate for different users
for uid in ['user_1', 'user_2', 'user_3', 'user_4']:
    checkout = ff.evaluate('new_checkout', uid)
    dashboard = ff.evaluate('beta_dashboard', uid)
    print(f'  {uid}: new_checkout={checkout}, beta_dashboard={dashboard}')

# Kill switch — disable checkout instantly
ff.toggle('new_checkout', False)`,
        output: '30% of users get new_checkout. Only user_1 and user_2 get beta_dashboard. Toggle disables instantly.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Flickr — feature flags for zero-downtime deploys.</strong> Flickr (Yahoo) pioneered feature flags at scale. They deploy code 50+ times per day with features hidden behind flags. New features start at 0% rollout, then gradually increase. During a 2012 incident, a new photo upload feature caused 5xx errors — the team toggled the flag off within 30 seconds, restoring service without a rollback. This reduced mean time to recovery (MTTR) from 30 minutes to under 1 minute.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Feature flags = decouple deployment from release',
          'Types: release, experiment, ops, permission, kill switch',
          'Percentage rollout: hash(user_id + flag_name) for consistent distribution',
          'Admin can toggle flags instantly without code deployment'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you ensure a user consistently sees a feature? → Hash user_id + flag_name to deterministically assign users to control/treatment groups.',
          'Q2: What is the risk of too many flags? → Flag debt — old flags never removed, making code hard to understand. Regularly clean up stale flags.',
          'Q3: How do feature flags help with graceful degradation? → During traffic spikes, turn off non-critical features (recommendations, personalization) to reduce load on backend services.'
        ]
      }
    ]
  },
  'observability': {
    title: 'Observability (Logging, Metrics, Tracing)',
    sections: [
      {
        heading: 'What is Observability?',
        text: 'Observability is the ability to understand a system\'s internal state from its external outputs. In software, this means three pillars: logs (discrete events), metrics (aggregated numbers over time), and traces (request flow across services). Together they let you debug, monitor, and alert on system behavior.',
        list: [
          '<strong>Logs:</strong> Structured events — who did what, when, with what result',
          '<strong>Metrics:</strong> Time-series data — CPU, memory, request rate, error rate, latency percentiles',
          '<strong>Traces:</strong> Distributed tracing follows a request across service boundaries',
          '<strong>The three pillars work together:</strong> Alert on metrics → find the trace → read the logs',
          '<strong>Golden signals:</strong> Latency, traffic, errors, saturation (Google SRE)'
        ]
      },
      {
        heading: 'Observability Three Pillars',
        diagram: `graph TB
    subgraph "Three Pillars"
        Logs[Logs<br/>ELK / Loki<br/>Discrete events]
        Metrics[Metrics<br/>Prometheus / Datadog<br/>Time-series numbers]
        Traces[Traces<br/>Jaeger / Zipkin<br/>Request flow]
    end
    
    subgraph "Workflow"
        Alert[Alert: p99 latency high] -->|Find| Trace[Trace: shows DB call is slow]
        Trace -->|Look at| Log[Log: slow query in orders service]
        Log -->|Fix| Code[Optimize query]
    end
    
    App[Application] -->|Structured logs| Logs
    App -->|/metrics endpoint| Metrics
    App -->|Trace headers| Traces
    
    style Alert fill:#fbb
    style Trace fill:#bbf
    style Log fill:#bfb`,
        text: 'Metrics trigger alerts. Traces show which service is slow. Logs show why. The three pillars work together for effective debugging.'
      },
      {
        heading: 'Code Example: Structured Logging + Metrics',
        code: `import time
import json
from collections import defaultdict

class ObservabilitySystem:
    def __init__(self, service_name):
        self.service = service_name
        self.logs = []
        self.metrics = defaultdict(list)
        self.traces = []

    def log(self, level, event, **kwargs):
        entry = {
            'timestamp': time.time(),
            'service': self.service,
            'level': level,
            'event': event,
            **kwargs
        }
        self.logs.append(entry)
        print(f'  [{level}] {event} - {json.dumps(kwargs)}')

    def record_metric(self, name, value, labels=None):
        self.metrics[name].append({
            'timestamp': time.time(),
            'value': value,
            'labels': labels or {}
        })

    def start_trace(self, trace_id, operation):
        span = {'trace_id': trace_id, 'operation': operation,
                'start': time.time(), 'service': self.service}
        self.traces.append(span)
        return span

    def end_trace(self, span):
        span['duration_ms'] = (time.time() - span['start']) * 1000
        print(f'  TRACE {span["trace_id"]}: {span["operation"]} '
              f'took {span["duration_ms"]:.1f}ms')

    def handle_request(self, user_id, operation):
        trace_id = f'trace_{len(self.traces)}'
        span = self.start_trace(trace_id, operation)
        self.log('INFO', 'request_started', user_id=user_id, operation=operation)
        self.record_metric('request_count', 1, {'operation': operation})
        
        # Simulate work
        time.sleep(0.05)
        
        if operation == 'slow_query':
            self.log('WARN', 'slow_query_detected', duration_ms=500)
            self.record_metric('request_latency_ms', 500, {'operation': operation})
        else:
            self.record_metric('request_latency_ms', 50, {'operation': operation})
        
        self.end_trace(span)
        self.log('INFO', 'request_completed', user_id=user_id, operation=operation)

obs = ObservabilitySystem('order-service')
obs.handle_request('user_1', 'get_order')
obs.handle_request('user_2', 'slow_query')
print(f'\\nMetrics: {dict(obs.metrics)}')`,
        output: 'Logs show events, metrics record latency, traces track request flow — all correlated by trace_id.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — distributed tracing with Jaeger.</strong> Uber open-sourced Jaeger (inspired by Google Dapper) for distributed tracing across their 2,000+ microservices. Each request gets a trace_id that propagates via HTTP headers. When a ride request fails, engineers search by trace_id in Jaeger, see which of the 20+ service calls failed, and jump to the corresponding logs in ELK. This reduced mean time to resolution (MTTR) from hours to minutes.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Logs = discrete events (what happened)',
          'Metrics = time-series numbers (how much, how fast)',
          'Traces = request flow (where, in what order)',
          'Golden signals: latency, traffic, errors, saturation'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the difference between monitoring and observability? → Monitoring tells you when something is wrong (alerting). Observability lets you understand why (debugging via logs, metrics, traces).',
          'Q2: What is a distributed trace? → A tree of spans showing a request\'s path across services, with timing for each service call.',
          'Q3: Why use structured logging? → Machine-parseable JSON logs with consistent fields (timestamp, level, service, trace_id) enable search and correlation with traces and metrics.'
        ]
      }
    ]
  },
  'health-checks': {
    title: 'Health Checks & Readiness Probes',
    sections: [
      {
        heading: 'What are Health Checks?',
        text: 'Health checks are endpoints that report whether a service is healthy and ready to serve traffic. Liveness probes check if the process is alive (should it be restarted?). Readiness probes check if the service can handle requests (should it receive traffic?). These are fundamental to orchestration platforms like Kubernetes.',
        list: [
          '<strong>Liveness probe:</strong> "Is the process alive?" — if fails, restart the container',
          '<strong>Readiness probe:</strong> "Can you serve requests?" — if fails, remove from load balancer',
          '<strong>Startup probe:</strong> "Has the app finished starting?" — disable liveness during slow startup',
          '<strong>Deep checks:</strong> Verify dependencies (DB, cache, downstream services) are reachable',
          '<strong>Shallow checks:</strong> Just verify the process is running (fast, no dependency checks)'
        ]
      },
      {
        heading: 'Health Check Architecture',
        diagram: `graph TB
    subgraph "Kubernetes Probes"
        K8s[Kubernetes] -->|Liveness every 10s| Pod[Pod]
        K8s -->|Readiness every 5s| Pod
        K8s -->|Startup once| Pod
        
        Pod -->|/health/live| Live{Process alive?}
        Pod -->|/health/ready| Ready{DB + Cache OK?}
        Pod -->|/health/startup| Start{App initialized?}
        
        Live -->|Fail| Restart[Restart Pod]
        Ready -->|Fail| Remove[Remove from Service LB]
        Ready -->|Pass| Add[Add to Service LB]
        Start -->|Pass| Enable[Enable liveness checks]
    end`,
        text: 'Liveness: restart the pod if the process is stuck. Readiness: route traffic only when the pod can serve requests. Startup: wait for slow-starting apps before enabling liveness.'
      },
      {
        heading: 'Code Example: Health Check Endpoints',
        code: `import time
import random

class HealthCheckService:
    def __init__(self):
        self.started_at = time.time()
        self.ready = False
        self.dependencies = {'database': False, 'cache': False, 'queue': False}

    def liveness(self):
        """Shallow check: is the process alive?"""
        return {'status': 'alive', 'uptime': time.time() - self.started_at}

    def readiness(self):
        """Deep check: can we serve requests?"""
        all_deps_ok = all(self.dependencies.values())
        return {
            'status': 'ready' if all_deps_ok else 'not_ready',
            'dependencies': self.dependencies
        }

    def startup(self):
        """Check if app has finished initializing."""
        return self.ready

    def simulate_startup(self):
        """Simulate app initialization sequence."""
        print('  Starting up...')
        time.sleep(0.1)
        self.dependencies['cache'] = True
        print('  Cache connected')
        time.sleep(0.1)
        self.dependencies['database'] = True
        print('  Database connected')
        time.sleep(0.1)
        self.dependencies['queue'] = True
        print('  Queue connected')
        self.ready = True
        print('  Startup complete!')

# Simulate
hc = HealthCheckService()
print(f'Startup check: {hc.startup()}')
print(f'Liveness: {hc.liveness()}')
print(f'Readiness (before startup): {hc.readiness()}')
print()
hc.simulate_startup()
print()
print(f'Startup check: {hc.startup()}')
print(f'Readiness (after startup): {hc.readiness()}')`,
        output: 'Before startup: not ready (all deps false). After startup: ready (all deps true).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Kubernetes — probes at Google.</strong> Google\'s internal infrastructure (Borg) uses health checks to manage millions of containers. Liveness probes restart pods stuck in deadlocks. Readiness probes remove pods from service endpoints during rolling updates, ensuring zero downtime. Google recommends separate liveness and readiness endpoints — a service might be alive (process running) but not ready (still warming cache, connecting to DB). Using only liveness would restart healthy-but-warming pods unnecessarily.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Liveness = restart if process is stuck (shallow check)',
          'Readiness = route traffic only when dependencies are OK (deep check)',
          'Startup = wait for slow-starting apps before enabling liveness',
          'Always use separate endpoints: /health/live, /health/ready'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What happens if readiness probe fails? → Pod is removed from the service endpoint list (no traffic), but NOT restarted. It stays running and can recover.',
          'Q2: Why not use liveness for everything? → A service might be alive but not ready (e.g., still loading a large cache). Restarting it would cause a restart loop.',
          'Q3: What should a deep readiness check include? → Check all critical dependencies: database connection, cache, message queue, and downstream service connectivity.'
        ]
      }
    ]
  },
  'chaos-engineering': {
    title: 'Chaos Engineering',
    sections: [
      {
        heading: 'What is Chaos Engineering?',
        text: 'Chaos engineering is the practice of deliberately injecting failures into a system to verify it handles them gracefully. Rather than waiting for real failures, chaos experiments proactively find weaknesses — uncovering hidden dependencies, missing circuit breakers, and single points of failure before they cause outages.',
        list: [
          '<strong>Game days:</strong> Planned exercises where teams inject failures and observe responses',
          '<strong>Failure injection:</strong> Kill processes, add network latency, exhaust resources, take down nodes',
          '<strong>Blast radius:</strong> Start small (one instance) and gradually increase scope',
          '<strong>Hypothesis-driven:</strong> Define expected behavior before injecting failure',
          '<strong>Automated:</strong> Run chaos experiments continuously in production (Chaos Monkey)'
        ]
      },
      {
        heading: 'Chaos Engineering Process',
        diagram: `graph TB
    subgraph "Chaos Experiment Cycle"
        H[Form Hypothesis<br/>"Service A can survive losing 1 instance"] --> B[Define Blast Radius<br/>1 instance in staging]
        B --> I[Inject Failure<br/>Kill instance]
        I --> O[Observe<br/>Metrics, logs, user impact]
        O --> A{System stable?}
        A -->|Yes| S[Expand blast radius<br/>Try 2 instances, then prod]
        A -->|No| F[Fix vulnerability<br/>Add circuit breaker, retry, fallback]
        S --> H
        F --> H
    end
    
    subgraph "Failure Types"
        FT1[Kill process/container]
        FT2[Network latency/packet loss]
        FT3[CPU/memory exhaustion]
        FT4[Dependency outage]
        FT5[Clock skew]
    end`,
        text: 'Chaos engineering is a cycle: form a hypothesis, inject failure, observe impact, fix vulnerabilities, and expand scope. Failure types range from process kills to network issues to resource exhaustion.'
      },
      {
        heading: 'Code Example: Chaos Experiment Runner',
        code: `import random
import time

class ChaosExperiment:
    def __init__(self, name, hypothesis, blast_radius):
        self.name = name
        self.hypothesis = hypothesis
        self.blast_radius = blast_radius  # number of instances to affect
        self.result = None

class ChaosRunner:
    def __init__(self):
        self.services = {
            'api-gateway': ['instance-1', 'instance-2', 'instance-3'],
            'user-service': ['instance-1', 'instance-2'],
            'payment-service': ['instance-1', 'instance-2', 'instance-3', 'instance-4']
        }
        self.circuit_breakers = {'payment-service': True}
        self.results = []

    def kill_instance(self, service, instance):
        """Simulate killing an instance."""
        if instance in self.services[service]:
            self.services[service].remove(instance)
            print(f'  CHAOS: Killed {service}/{instance}')
            return True
        return False

    def check_service_health(self, service):
        """Check if service still has enough instances."""
        instances = self.services[service]
        min_required = 1
        healthy = len(instances) >= min_required
        has_cb = self.circuit_breakers.get(service, False)
        print(f'  {service}: {len(instances)} instances, '
              f'healthy={healthy}, circuit_breaker={has_cb}')
        return healthy

    def run_experiment(self, service, num_to_kill):
        print(f'\\nExperiment: Kill {num_to_kill} instance(s) of {service}')
        print(f'Hypothesis: {service} survives losing {num_to_kill} instance(s)')
        
        before = len(self.services[service])
        for _ in range(num_to_kill):
            if self.services[service]:
                victim = random.choice(self.services[service])
                self.kill_instance(service, victim)
        
        time.sleep(0.1)  # Simulate time for system to react
        healthy = self.check_service_health(service)
        
        result = 'PASS' if healthy else 'FAIL'
        self.results.append({'service': service, 'killed': num_to_kill, 'result': result})
        print(f'  Result: {result} ({before} -> {len(self.services[service])} instances)')

runner = ChaosRunner()
runner.run_experiment('api-gateway', 1)
runner.run_experiment('user-service', 1)
runner.run_experiment('payment-service', 2)
print('\\nSummary:', runner.results)`,
        output: 'Each experiment kills instances and checks if the service stays healthy. PASS/FAIL recorded.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Netflix — Chaos Monkey and the Simian Army.</strong> Netflix created Chaos Monkey in 2011, which randomly terminates production instances during business hours. This forced engineers to build resilient services that survive instance failures. They later expanded to the "Simian Army": Chaos Gorilla (takes down an entire availability zone), Chaos Kong (takes down a region), and Latency Monkey (injects network delays). Netflix runs these experiments continuously in production, ensuring their 200M+ subscribers experience minimal disruptions.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Chaos engineering = deliberately inject failures to find weaknesses',
          'Start small (staging, 1 instance) and gradually expand blast radius',
          'Failure types: process kill, network latency, resource exhaustion, dependency outage',
          'Hypothesis-driven: define expected behavior before injecting failure'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why run chaos experiments in production? → Staging doesn\'t fully replicate production traffic, data, or scale. Production reveals real weaknesses that staging misses.',
          'Q2: What is "blast radius" in chaos engineering? → The scope of impact — number of instances, services, or users affected. Start small and increase gradually.',
          'Q3: How do circuit breakers help with chaos? → They prevent cascading failures when a dependency goes down, allowing the system to degrade gracefully instead of failing completely.'
        ]
      }
    ]
  }
};