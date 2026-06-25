// Auto-generated real DevOps & Cloud interview questions (second half)
// Generated: 2026-06-13T19:13:00Z

export const devopsCloudRealQuestionsB = {
  "questions": [
    {
      "question": "What is the difference between synchronous and asynchronous communication in microservices?",
      "answer": "<p><strong>Synchronous communication</strong> blocks the caller until a response is received, tightly coupling services in time. <strong>Asynchronous communication</strong> decouples services by using events or messages; the caller continues after publishing and the consumer processes independently.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Synchronous</th><th style='padding:8px;border:1px solid #ddd;'>Asynchronous</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Coupling</td><td style='padding:8px;border:1px solid #ddd;'>Tight</td><td style='padding:8px;border:1px solid #ddd;'>Loose</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Failure impact</td><td style='padding:8px;border:1px solid #ddd;'>Can cascade</td><td style='padding:8px;border:1px solid #ddd;'>Buffered by broker</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Protocols</td><td style='padding:8px;border:1px solid #ddd;'>HTTP/gRPC</td><td style='padding:8px;border:1px solid #ddd;'>Messaging/Event bus</td></tr></table><pre><code class=\"language-python\"># Synchronous REST call\nimport requests\norder = requests.get('http://orders/api/123').json()\n\n# Asynchronous event publish\nproducer.send('orders', {'orderId': '123', 'items': [...]})\n# Inventory service consumes later</code></pre><p>Use synchronous flows when immediate consistency is required; use asynchronous for scalability, resilience, and long-running operations.</p>",
      "difficulty": "Intermediate",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "Synchronous calls block and tightly couple services.",
        "Asynchronous messaging decouples services in time and improves resilience.",
        "Choose sync for immediate consistency and async for throughput and fault tolerance."
      ]
    },
    {
      "question": "What is CQRS and how does it complement Event Sourcing in microservices?",
      "answer": "<p><strong>CQRS</strong> (Command Query Responsibility Segregation) separates the models that update state (commands) from the models that read state (queries). <strong>Event Sourcing</strong> stores state as a sequence of immutable events rather than only the current snapshot.</p><ul><li>Commands append events to the event store.</li><li>The event store becomes the system of record.</li><li>Projectors build read-optimized query views by consuming events.</li><li>Read models can be rebuilt by replaying events.</li></ul><pre><code class=\"language-javascript\">// Command side appends event\neventStore.append(OrderCreated { orderId, items, timestamp })\n\n// Projection updates read model\nonOrderCreated(event) {\n  readModel.orders.insert({ id: event.orderId, total: computeTotal(event.items) })\n}\n\n// Query side\nGET /orders/{id} -&gt; readModel.orders.find(id)</code></pre><p>This pairing is powerful for audit-heavy domains but adds complexity and eventual consistency on read models.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "CQRS separates write and read models.",
        "Event sourcing stores state changes as immutable events.",
        "Together they enable auditability and independent read-model optimization."
      ]
    },
    {
      "question": "What is a Service Mesh and what role does it play in microservices?",
      "answer": "<p>A <strong>service mesh</strong> is a dedicated infrastructure layer for service-to-service communication, usually implemented as sidecar proxies (e.g., Envoy) controlled by a control plane (Istio, Linkerd).</p><ul><li><strong>Traffic management:</strong> routing, retries, timeouts, circuit breaking, canary releases</li><li><strong>Security:</strong> mutual TLS and authorization policies</li><li><strong>Observability:</strong> metrics, distributed tracing, access logs</li><li><strong>Resilience:</strong> load balancing, fault injection</li></ul><pre><code class=\"language-yaml\"># Istio VirtualService example\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts: [reviews]\n  http:\n  - route:\n    - destination: {host: reviews, subset: v1}\n      weight: 90\n    - destination: {host: reviews, subset: v2}\n      weight: 10</code></pre><p>Adopt a mesh when cross-cutting concerns become too complex to implement in every service, but be aware of operational overhead.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "A service mesh uses sidecar proxies to manage service-to-service traffic.",
        "It provides traffic management, mTLS, and observability out-of-band.",
        "Adopt when cross-cutting concerns are too complex to implement per service."
      ]
    },
    {
      "question": "What is eventual consistency and how do you handle it in microservices?",
      "answer": "<p><strong>Eventual consistency</strong> means that, absent new updates, all replicas will converge to the same value over time. It is common in distributed systems where services own separate data stores and synchronize via events.</p><ul><li><strong>Idempotency:</strong> duplicate event processing must not corrupt state.</li><li><strong>Compensating transactions:</strong> reverse prior steps on failure (Saga pattern).</li><li><strong>Conflict resolution:</strong> use timestamps, vector clocks, or business rules.</li><li><strong>Read-model projections:</strong> tolerate staleness in query models.</li><li><strong>UX patterns:</strong> show pending/acknowledged states rather than immediate completion.</li></ul><pre><code class=\"language-python\">def handle_payment_created(event):\n    if processed_events.exists(event.idempotency_key):\n        return\n    account = accounts.get(event.account_id)\n    account.credit(event.amount)\n    processed_events.record(event.idempotency_key)</code></pre><p>Eventual consistency favors availability and partition tolerance but requires careful handling of duplicates, ordering, and failures.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "Eventual consistency means replicas converge over time.",
        "Use idempotency, compensating transactions, and conflict resolution.",
        "Event-driven read models naturally embrace eventual consistency."
      ]
    },
    {
      "question": "What is the difference between HTTP and gRPC for inter-service communication?",
      "answer": "<p><strong>HTTP/REST</strong> uses text-based payloads (usually JSON) and standard verbs. <strong>gRPC</strong> uses HTTP/2 with binary Protocol Buffers and generates client/server stubs.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>HTTP/REST</th><th style='padding:8px;border:1px solid #ddd;'>gRPC</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Serialization</td><td style='padding:8px;border:1px solid #ddd;'>JSON/XML text</td><td style='padding:8px;border:1px solid #ddd;'>Protobuf binary</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Transport</td><td style='padding:8px;border:1px solid #ddd;'>HTTP/1.1 or HTTP/2</td><td style='padding:8px;border:1px solid #ddd;'>HTTP/2</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Streaming</td><td style='padding:8px;border:1px solid #ddd;'>Limited</td><td style='padding:8px;border:1px solid #ddd;'>Bidirectional native</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Browser</td><td style='padding:8px;border:1px solid #ddd;'>Native</td><td style='padding:8px;border:1px solid #ddd;'>Needs gRPC-Web</td></tr></table><pre><code class=\"language-protobuf\">service OrderService {\n  rpc GetOrder(OrderRequest) returns (OrderResponse);\n  rpc StreamOrders(Empty) returns (stream OrderResponse);\n}</code></pre><p>REST is best for public and browser-facing APIs; gRPC excels for internal, high-throughput, polyglot service communication.</p>",
      "difficulty": "Intermediate",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "HTTP/REST uses text payloads and is universally supported.",
        "gRPC uses binary Protobuf over HTTP/2 with native streaming.",
        "REST suits public APIs; gRPC suits internal microservices communication."
      ]
    },
    {
      "question": "What is the Strangler Pattern and when would you use it?",
      "answer": "<p>The <strong>Strangler Fig Pattern</strong> incrementally replaces a legacy system by routing requests through a facade that sends traffic to either the old or new implementation. Over time, more functionality is migrated until the legacy system is decommissioned.</p><ol><li>Place a routing facade in front of the legacy application.</li><li>Identify a bounded context to migrate.</li><li>Build the new service and route specific requests to it.</li><li>Repeat until all features are modernized.</li><li>Remove the legacy system and facade.</li></ol><pre><code class=\"language-nginx\">location /api/orders {\n  if (feature_flags.new_orders_enabled) {\n    proxy_pass http://new-orders-service;\n  } else {\n    proxy_pass http://legacy-monolith;\n  }\n}</code></pre><p>Use it when a big-bang rewrite is too risky; it lowers risk, enables incremental delivery, and validates the new system early.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "The Strangler Pattern incrementally replaces a legacy system via a facade.",
        "Traffic is gradually shifted from the old system to the new system.",
        "It reduces migration risk and enables incremental delivery."
      ]
    },
    {
      "question": "What is the difference between Choreography and Orchestration in Saga pattern?",
      "answer": "<p>A <strong>Saga</strong> breaks a long-running transaction into local steps. <strong>Choreography</strong> coordinates steps via events emitted by each service. <strong>Orchestration</strong> uses a central coordinator that invokes each step explicitly.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Choreography</th><th style='padding:8px;border:1px solid #ddd;'>Orchestration</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Coordination</td><td style='padding:8px;border:1px solid #ddd;'>Event-driven, decentralized</td><td style='padding:8px;border:1px solid #ddd;'>Central orchestrator</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Coupling</td><td style='padding:8px;border:1px solid #ddd;'>Services know peer events</td><td style='padding:8px;border:1px solid #ddd;'>Services know only orchestrator</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Visibility</td><td style='padding:8px;border:1px solid #ddd;'>Harder to trace</td><td style='padding:8px;border:1px solid #ddd;'>Workflow in one place</td></tr></table><pre><code class=\"language-python\"># Choreography: services react to events\nOrderCreated -&gt; Inventory reserves -&gt; StockReserved -&gt; Payment charges\n\n# Orchestration: coordinator drives steps\nsaga.start(order)\n  .step(inventory.reserveStock)\n  .step(payment.charge)\n  .onFailure(payment.refund, inventory.releaseStock)</code></pre><p>Choose choreography for simple, loosely-coupled flows; orchestration for complex workflows needing visibility and centralized error handling.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "Choreography uses events for decentralized saga coordination.",
        "Orchestration uses a central coordinator to manage saga steps.",
        "Use choreography for simple flows and orchestration for complex, traceable workflows."
      ]
    },
    {
      "question": "How do you implement canary deployments for microservices?",
      "answer": "<p>A <strong>canary deployment</strong> routes a small percentage of traffic to a new version before full rollout. It limits blast radius and validates production behavior with real users.</p><ul><li><strong>Ingress/Load balancer:</strong> route traffic by percentage.</li><li><strong>Service mesh:</strong> Istio VirtualService or Linkerd traffic split.</li><li><strong>Feature flags:</strong> expose the new version to specific cohorts.</li><li><strong>Progressive delivery tools:</strong> Flagger or Argo Rollouts with automated analysis.</li></ul><pre><code class=\"language-yaml\"># Argo Rollouts canary steps\nstrategy:\n  canary:\n    steps:\n    - setWeight: 10\n    - pause: {duration: 10m}\n    - setWeight: 50\n    - pause: {duration: 10m}\n    - setWeight: 100</code></pre><p>Define success criteria (error rate, latency), monitor golden signals, and enable automatic rollback if thresholds are breached.</p>",
      "difficulty": "Advanced",
      "tags": ["Microservices", "DevOps", "Cloud"],
      "keyPoints": [
        "Canary deployments route a small portion of traffic to a new version first.",
        "Implement via ingress weights, service mesh, feature flags, or Argo Rollouts.",
        "Define metrics-based success criteria and automatic rollback."
      ]
    },
    {
      "question": "What is the difference between a Kubernetes Deployment and a ReplicaSet?",
      "answer": "<p>A <strong>ReplicaSet</strong> ensures a specified number of pod replicas are running at all times. A <strong>Deployment</strong> is a higher-level controller that manages ReplicaSets and provides declarative updates, rollback, and rollout strategies.</p><ul><li>You usually create Deployments, not ReplicaSets directly.</li><li>When you update a Deployment, it creates a new ReplicaSet with the new pod template and scales the old one down.</li><li>Deployments support rolling updates, rollback, and revision history.</li></ul><pre><code class=\"language-yaml\">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\nspec:\n  replicas: 3\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.25</code></pre><p>Think of ReplicaSet as the \"what runs\" and Deployment as the \"how it changes over time\".</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "A ReplicaSet maintains a stable set of pod replicas.",
        "A Deployment manages ReplicaSets and enables rolling updates and rollback.",
        "Users typically interact with Deployments rather than ReplicaSets."
      ]
    },
    {
      "question": "What is the role of the Kubelet in Kubernetes?",
      "answer": "<p>The <strong>Kubelet</strong> is an agent that runs on every node in a Kubernetes cluster. It ensures that containers described in PodSpecs are running and healthy.</p><ul><li>Registers the node with the API server.</li><li>Watches for PodSpecs assigned to its node via the API server.</li><li>Works with the container runtime (containerd, CRI-O) to start, stop, and monitor containers.</li><li>Reports node and pod status, resource usage, and events.</li><li>Executes liveness and readiness probes.</li></ul><pre><code class=\"language-bash\"># Kubelet logs\njournalctl -u kubelet -f\n\n# View node status\nkubectl describe node worker-1</code></pre><p>The Kubelet does not manage containers that were not created by Kubernetes.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "The Kubelet runs on every node and manages pod lifecycle.",
        "It communicates with the API server and container runtime.",
        "It reports status and executes health probes."
      ]
    },
    {
      "question": "What are ConfigMaps and Secrets in Kubernetes and how do they differ?",
      "answer": "<p><strong>ConfigMaps</strong> store non-sensitive configuration data as key-value pairs. <strong>Secrets</strong> store sensitive data such as passwords, tokens, and keys.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>ConfigMap</th><th style='padding:8px;border:1px solid #ddd;'>Secret</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Data</td><td style='padding:8px;border:1px solid #ddd;'>Non-sensitive config</td><td style='padding:8px;border:1px solid #ddd;'>Sensitive credentials</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Encoding</td><td style='padding:8px;border:1px solid #ddd;'>Plain text</td><td style='padding:8px;border:1px solid #ddd;'>Base64 encoded at rest</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Size limit</td><td style='padding:8px;border:1px solid #ddd;'>1 MiB</td><td style='padding:8px;border:1px solid #ddd;'>1 MiB</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Encryption</td><td style='padding:8px;border:1px solid #ddd;'>None by default</td><td style='padding:8px;border:1px solid #ddd;'>Enable encryption at rest</td></tr></table><pre><code class=\"language-yaml\"># Mount ConfigMap as env\nenvFrom:\n- configMapRef:\n    name: app-config\n\n# Mount Secret as volume\nvolumes:\n- name: secret-vol\n  secret:\n    secretName: db-credentials</code></pre><p>Neither should hold very large data. For secrets, also consider external secret managers (AWS Secrets Manager, Vault) and the External Secrets Operator.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "ConfigMaps store non-sensitive configuration.",
        "Secrets store sensitive data and support encryption at rest.",
        "Both can be mounted as files or injected as environment variables."
      ]
    },
    {
      "question": "How do readiness and liveness probes work in Kubernetes?",
      "answer": "<p><strong>Liveness</strong> and <strong>readiness</strong> probes help Kubernetes know when to restart a container and when to send traffic to it.</p><ul><li><strong>Liveness probe:</strong> detects when an application is deadlocked or stuck. If it fails, Kubernetes restarts the container.</li><li><strong>Readiness probe:</strong> detects when an application is ready to accept traffic. If it fails, the pod is removed from Service endpoints.</li><li><strong>Startup probe:</strong> used for slow-starting apps; disables liveness/readiness until it succeeds.</li></ul><pre><code class=\"language-yaml\">readinessProbe:\n  httpGet:\n    path: /health\n    port: 8080\n  initialDelaySeconds: 5\n  periodSeconds: 10\nlivenessProbe:\n  httpGet:\n    path: /live\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 20</code></pre><p>Keep probes lightweight and idempotent. Avoid using dependencies that can fail transiently in liveness probes.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Liveness probes trigger container restart on failure.",
        "Readiness probes control whether a pod receives traffic.",
        "Startup probes protect slow-starting applications."
      ]
    },
    {
      "question": "What is a StatefulSet and when would you use it instead of a Deployment?",
      "answer": "<p>A <strong>StatefulSet</strong> is a Kubernetes workload API object used to manage stateful applications. Unlike a Deployment, it provides stable network identities, stable persistent storage, and ordered deployment/scaling.</p><ul><li><strong>Stable hostname:</strong> pod-0, pod-1, pod-2 keep their names after rescheduling.</li><li><strong>Stable storage:</strong> each pod gets its own PersistentVolumeClaim via volumeClaimTemplates.</li><li><strong>Ordered operations:</strong> pods are created, scaled, and rolled out in sequence.</li></ul><pre><code class=\"language-yaml\">apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: postgres\nspec:\n  serviceName: postgres\n  replicas: 3\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: [\"ReadWriteOnce\"]\n      resources:\n        requests:\n          storage: 10Gi</code></pre><p>Use StatefulSets for databases (PostgreSQL, MongoDB replicas), ZooKeeper, Kafka, and other clustered stateful services.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "StatefulSets provide stable network identity and persistent storage per pod.",
        "They support ordered deployment and scaling.",
        "Use them for databases and clustered stateful services instead of Deployments."
      ]
    },
    {
      "question": "How do you implement canary and blue-green deployments in Kubernetes?",
      "answer": "<p>Both patterns reduce deployment risk by controlling how traffic reaches a new version.</p><ul><li><strong>Blue-green:</strong> run two identical environments. Switch all traffic from blue (old) to green (new) at once. Rollback is instant by switching back.</li><li><strong>Canary:</strong> route a small percentage of traffic to the new version, then gradually increase while monitoring metrics.</li></ul><pre><code class=\"language-yaml\"># Blue-green via Service selector\napiVersion: v1\nkind: Service\nmetadata:\n  name: app\nspec:\n  selector:\n    version: green  # switch from blue to green\n---\n# Canary via Ingress-Nginx\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/canary: \"true\"\n    nginx.ingress.kubernetes.io/canary-weight: \"10\"</code></pre><p>Tools like Argo Rollouts, Flagger, and service meshes (Istio) automate these patterns with metrics-based promotion and rollback.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Blue-green switches all traffic between two environments instantly.",
        "Canary gradually shifts traffic while monitoring metrics.",
        "Use Argo Rollouts, Flagger, or a service mesh for automation."
      ]
    },
    {
      "question": "What is the role of a Service in Kubernetes and what are the different service types?",
      "answer": "<p>A Kubernetes <strong>Service</strong> exposes a set of pods as a network service, providing stable DNS names and IP addresses regardless of pod churn.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Description</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ClusterIP</td><td style='padding:8px;border:1px solid #ddd;'>Internal cluster access only (default)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>NodePort</td><td style='padding:8px;border:1px solid #ddd;'>Exposes service on each node's IP at a static port</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>LoadBalancer</td><td style='padding:8px;border:1px solid #ddd;'>Provisions an external cloud load balancer</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ExternalName</td><td style='padding:8px;border:1px solid #ddd;'>Maps to an external DNS name</td></tr></table><pre><code class=\"language-yaml\">apiVersion: v1\nkind: Service\nmetadata:\n  name: web\nspec:\n  type: LoadBalancer\n  selector:\n    app: web\n  ports:\n  - port: 80\n    targetPort: 8080</code></pre><p>Services use label selectors to route traffic to pods. Headless Services (ClusterIP: None) are used when clients need direct pod IPs.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "A Service provides stable networking for ephemeral pods.",
        "Types include ClusterIP, NodePort, LoadBalancer, and ExternalName.",
        "Services route traffic via label selectors."
      ]
    },
    {
      "question": "How would you scale an application experiencing increased traffic in Kubernetes?",
      "answer": "<p>Kubernetes offers multiple scaling mechanisms depending on the source of load.</p><ul><li><strong>Manual scaling:</strong> <code>kubectl scale deployment app --replicas=10</code></li><li><strong>Horizontal Pod Autoscaler (HPA):</strong> scales pods based on CPU, memory, or custom metrics.</li><li><strong>Vertical Pod Autoscaler (VPA):</strong> adjusts CPU/memory requests and limits.</li><li><strong>Cluster Autoscaler:</strong> adds or removes nodes based on pending pods.</li><li><strong>KEDA:</strong> event-driven autoscaling based on Kafka, SQS, etc.</li></ul><pre><code class=\"language-yaml\">apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app\n  minReplicas: 2\n  maxReplicas: 20\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70</code></pre><p>Ensure requests/limits are set correctly, use readiness probes so new pods only receive traffic when ready, and pair HPA with Cluster Autoscaler for node-level scaling.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Use HPA to scale pods based on resource or custom metrics.",
        "Use VPA to right-size resource requests and limits.",
        "Use Cluster Autoscaler or KEDA for node-level or event-driven scaling."
      ]
    },
    {
      "question": "What are taints and tolerations in Kubernetes?",
      "answer": "<p><strong>Taints</strong> repel pods from nodes unless the pod has a matching <strong>toleration</strong>. They are used to dedicate nodes to specific workloads or keep pods away from unsuitable nodes.</p><ul><li>A taint has a key, value, and effect (NoSchedule, PreferNoSchedule, NoExecute).</li><li>A toleration allows a pod to be scheduled on a tainted node.</li><li>They complement node affinity/selector rules.</li></ul><pre><code class=\"language-yaml\"># Taint a node for GPU workloads\nkubectl taint nodes gpu-node hardware=gpu:NoSchedule\n\n# Pod toleration\nspec:\n  tolerations:\n  - key: hardware\n    operator: Equal\n    value: gpu\n    effect: NoSchedule</code></pre><p>Common uses include dedicated nodes for GPUs, control-plane isolation, and separating production from test workloads.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Taints repel pods from nodes.",
        "Tolerations let pods schedule onto tainted nodes.",
        "They are used for dedicated hardware and workload isolation."
      ]
    },
    {
      "question": "What is a PodDisruptionBudget and why is it important?",
      "answer": "<p>A <strong>PodDisruptionBudget (PDB)</strong> limits how many pods of a replicated application can be down simultaneously during voluntary disruptions such as node drains, cluster upgrades, or pod evictions.</p><ul><li><strong>minAvailable:</strong> ensure at least N pods are running.</li><li><strong>maxUnavailable:</strong> allow at most N pods to be unavailable.</li><li>It does not protect against involuntary disruptions like node crashes.</li></ul><pre><code class=\"language-yaml\">apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: app-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: web</code></pre><p>PDBs are critical for maintaining availability during maintenance and upgrades without over-provisioning.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "A PDB limits voluntary disruptions to a workload.",
        "Use minAvailable or maxUnavailable to protect availability.",
        "It does not prevent involuntary failures like crashes."
      ]
    },
    {
      "question": "How do you debug a pod stuck in CrashLoopBackOff state?",
      "answer": "<p><strong>CrashLoopBackOff</strong> means a container repeatedly crashes and Kubernetes backs off before restarting it.</p><ol><li>Inspect pod events: <code>kubectl describe pod &lt;pod&gt;</code></li><li>Check previous container logs: <code>kubectl logs &lt;pod&gt; --previous</code></li><li>Verify resource limits and OOMKilled status.</li><li>Check liveness probes are not too aggressive.</li><li>Run the image locally or as a debug container to reproduce.</li></ol><pre><code class=\"language-bash\"># Common commands\nkubectl describe pod mypod\nkubectl logs mypod --previous\nkubectl get pod mypod -o yaml | grep -A5 lastState\n# Debug ephemeral container\nkubectl debug mypod -it --image=busybox --target=app</code></pre><p>Common causes include misconfigured startup commands, missing environment variables or secrets, permission issues, and insufficient memory.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Describe the pod and inspect previous logs for error messages.",
        "Check for OOMKilled, misconfiguration, and probe failures.",
        "Use ephemeral debug containers or local reproduction to diagnose."
      ]
    },
    {
      "question": "What is RBAC in Kubernetes and how do you implement fine-grained access control?",
      "answer": "<p><strong>RBAC</strong> (Role-Based Access Control) in Kubernetes restricts access to API resources based on roles. It uses Roles/ClusterRoles to define permissions and RoleBindings/ClusterRoleBindings to assign them to users or service accounts.</p><ul><li><strong>Role:</strong> permissions within a namespace.</li><li><strong>ClusterRole:</strong> permissions across the cluster or for non-namespaced resources.</li><li><strong>RoleBinding:</strong> binds a Role to subjects in a namespace.</li><li><strong>ClusterRoleBinding:</strong> binds a ClusterRole to subjects cluster-wide.</li></ul><pre><code class=\"language-yaml\">apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: dev\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: read-pods\n  namespace: dev\nsubjects:\n- kind: ServiceAccount\n  name: ci-bot\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io</code></pre><p>Follow least privilege, avoid ClusterRoleBinding when a RoleBinding suffices, and audit permissions regularly.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "RBAC uses Roles and ClusterRoles to define permissions.",
        "RoleBindings and ClusterRoleBindings assign permissions to subjects.",
        "Apply least privilege and prefer namespace-scoped roles."
      ]
    },
    {
      "question": "What is the difference between continuous delivery and continuous deployment?",
      "answer": "<p>Both are stages of CI/CD maturity, but they differ in the final step.</p><ul><li><strong>Continuous Delivery:</strong> code is automatically built, tested, and prepared for release; a human approves the final deploy to production.</li><li><strong>Continuous Deployment:</strong> every change that passes automated tests is automatically released to production without human intervention.</li></ul><pre><code class=\"language-text\"># Continuous Delivery pipeline\nBuild -&gt; Test -&gt; Staging Deploy -&gt; Manual Approval -&gt; Production Deploy\n\n# Continuous Deployment pipeline\nBuild -&gt; Test -&gt; Staging Deploy -&gt; Automated Production Deploy</code></pre><p>Continuous deployment requires high test coverage, feature flags, robust monitoring, and automated rollback to be safe.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Continuous Delivery prepares releases but requires manual approval for production.",
        "Continuous Deployment automatically releases every passing change to production.",
        "Continuous deployment requires strong tests, monitoring, and rollback mechanisms."
      ]
    },
    {
      "question": "Describe a time you debugged a production outage. What was your approach?",
      "answer": "<p>A structured incident response approach reduces mean time to recovery (MTTR) and prevents recurrence.</p><ol><li><strong>Detect and declare:</strong> page the on-call, create an incident channel/ticket.</li><li><strong>Contain:</strong> scale up, fail over, roll back, or enable a feature flag.</li><li><strong>Diagnose:</strong> use logs, metrics, and traces; identify what changed recently.</li><li><strong>Resolve:</strong> apply a fix and verify recovery.</li><li><strong>Post-incident:</strong> write a blameless postmortem with timeline, root cause, and action items.</li></ol><pre><code class=\"language-bash\"># Useful commands during an outage\nkubectl get pods -A | grep -v Running\nkubectl logs -l app=web --tail=100 --all-containers\ncurl -s http://localhost:9090/metrics | grep error_rate\n# Distributed trace\njaeger-ui -&gt; search by traceID</code></pre><p>Always prioritize restoring service before root-cause analysis. Communicate status clearly to stakeholders.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Detect, contain, diagnose, resolve, and follow up with a postmortem.",
        "Prioritize service restoration over root-cause analysis during the incident.",
        "Use logs, metrics, traces, and recent changes to identify causes quickly."
      ]
    },
    {
      "question": "How do you decide what to monitor in a DevOps environment?",
      "answer": "<p>Monitoring should focus on signals that indicate user experience and system health. Use the <strong>Four Golden Signals</strong> as a starting point.</p><ul><li><strong>Latency:</strong> time to serve requests.</li><li><strong>Traffic:</strong> demand on the system.</li><li><strong>Errors:</strong> rate of failed requests.</li><li><strong>Saturation:</strong> how close to capacity resources are.</li></ul><p>Also monitor business-level metrics (checkout completions, sign-ups), infrastructure (CPU, memory, disk), and CI/CD health (build duration, failure rate, deployment frequency).</p><pre><code class=\"language-promql\"># Example Prometheus queries\nrate(http_requests_total{status=~\"5..\"}[5m])\nhistogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))\n100 - (avg by(instance) (irate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)</code></pre><p>Alert on symptoms (high error rate) rather than every possible cause, and keep alert noise low.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Start with the Four Golden Signals: latency, traffic, errors, saturation.",
        "Add business, infrastructure, and CI/CD metrics.",
        "Alert on symptoms and keep noise low."
      ]
    },
    {
      "question": "What was the most painful deployment you have experienced and what changed since then?",
      "answer": "<p>This behavioral question should show growth. A strong answer follows the STAR method and highlights process improvements.</p><ul><li><strong>Situation:</strong> describe the system and deployment context.</li><li><strong>Task:</strong> your role during the incident.</li><li><strong>Action:</strong> how you stabilized, diagnosed, and fixed the issue.</li><li><strong>Result:</strong> lessons learned and improvements implemented.</li></ul><pre><code class=\"language-text\"># Improvements after a painful deployment\n- Introduced canary deployments with Argo Rollouts\n- Added pre-deploy smoke tests and automated rollback\n- Implemented feature flags to disable risky changes\n- Enhanced observability with structured logs and traces\n- Required production readiness reviews for major changes</code></pre><p>Emphasize that painful deployments led to automation, smaller releases, better testing, and a culture of blameless postmortems.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Use the STAR method to structure your answer.",
        "Highlight stabilization, diagnosis, and follow-up improvements.",
        "Connect the experience to automation, smaller releases, and observability."
      ]
    },
    {
      "question": "How would you migrate an inventory app from VM to Kubernetes?",
      "answer": "<p>VM-to-Kubernetes migration should be incremental and reversible.</p><ol><li><strong>Assess:</strong> map dependencies, state, configuration, and networking.</li><li><strong>Containerize:</strong> create Docker images, externalize config via ConfigMaps/Secrets.</li><li><strong>Prototype:</strong> run on a non-production cluster with representative traffic.</li><li><strong>Data:</strong> decide on state strategy \u2014 managed DB, StatefulSet, or keep DB outside Kubernetes.</li><li><strong>Networking:</strong> expose via Ingress/Service, set up DNS, TLS.</li><li><strong>Cutover:</strong> use a strangler pattern or blue-green cutover; monitor closely.</li><li><strong>Optimize:</strong> add HPA, probes, resource requests/limits, PDBs.</li></ol><pre><code class=\"language-text\"># High-level cutover\nUsers -&gt; DNS/Load Balancer -&gt; Ingress -&gt; Kubernetes Service -&gt; Pods\n                       |\n                       -&gt; Legacy VM (kept as rollback target)</code></pre><p>Validate performance, security, and disaster recovery before decommissioning the VM.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Assess dependencies and containerize the application first.",
        "Keep data strategy and networking simple; use managed services where possible.",
        "Cut over incrementally with a rollback plan and validate thoroughly."
      ]
    },
    {
      "question": "How do you handle failures in a CI/CD pipeline?",
      "answer": "<p>Pipeline failures should be fast, visible, and recoverable.</p><ul><li><strong>Fast feedback:</strong> run quick checks (lint, unit tests) early; slow integration tests later.</li><li><strong>Notifications:</strong> alert the team on failure with clear logs and links.</li><li><strong>Retry policies:</strong> retry transient steps like package downloads or flaky test suites.</li><li><strong>Artifact immutability:</strong> promote the same artifact through stages rather than rebuilding.</li><li><strong>Rollback:</strong> keep previous release images/tags and automate rollback on deploy failure.</li></ul><pre><code class=\"language-yaml\"># GitHub Actions failure handling\njobs:\n  test:\n    steps:\n    - uses: actions/checkout@v4\n    - name: Run tests\n      run: npm test\n      continue-on-error: false\n    - name: Notify on failure\n      if: failure()\n      run: echo \"Tests failed\" | slack-notify</code></pre><p>Regularly review flaky tests and pipeline duration. Treat red pipelines as the highest priority.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Run fast checks early and keep failure feedback visible.",
        "Use retries for transient failures and immutable artifacts across stages.",
        "Automate rollback and prioritize fixing broken pipelines."
      ]
    },
    {
      "question": "What is blue-green deployment and how does it reduce downtime?",
      "answer": "<p><strong>Blue-green deployment</strong> maintains two identical production environments. Blue runs the current version; green runs the new version. After testing green, traffic is switched from blue to green instantly.</p><ul><li><strong>Zero downtime:</strong> the cutover is a routing change.</li><li><strong>Instant rollback:</strong> switch traffic back to blue if issues arise.</li><li><strong>Cost:</strong> requires running two environments simultaneously.</li></ul><pre><code class=\"language-yaml\"># Switch traffic via Service selector\napiVersion: v1\nkind: Service\nmetadata:\n  name: app\nspec:\n  selector:\n    version: green</code></pre><p>Blue-green is ideal when downtime is unacceptable but you can afford duplicated resources. Canary is preferred when you want gradual risk reduction.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Blue-green keeps two identical environments and switches traffic instantly.",
        "It enables zero-downtime deployments and instant rollback.",
        "It costs more because both environments run simultaneously."
      ]
    },
    {
      "question": "How do you handle secrets in CI/CD pipelines?",
      "answer": "<p>Secrets in CI/CD should never be hard-coded or logged. Use secure secret management practices.</p><ul><li><strong>Native CI secret stores:</strong> GitHub Actions secrets, GitLab CI/CD variables, Azure DevOps secret variables.</li><li><strong>Cloud secret managers:</strong> AWS Secrets Manager, GCP Secret Manager, Azure Key Vault.</li><li><strong>HashiCorp Vault:</strong> dynamic secrets and fine-grained policies.</li><li><strong>Masking:</strong> ensure secrets are redacted from logs.</li><li><strong>Least privilege:</strong> scope secrets to the jobs that need them.</li></ul><pre><code class=\"language-yaml\"># GitHub Actions example\njobs:\n  deploy:\n    steps:\n    - name: Configure AWS credentials\n      uses: aws-actions/configure-aws-credentials@v4\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n    - run: kubectl apply -f k8s/</code></pre><p>Rotate secrets regularly, avoid passing secrets between jobs unnecessarily, and use short-lived credentials where possible.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Store secrets in native CI vaults or cloud secret managers.",
        "Mask secrets in logs and apply least-privilege scoping.",
        "Rotate credentials and prefer short-lived tokens."
      ]
    },
    {
      "question": "How do you optimize CI/CD pipelines for speed?",
      "answer": "<p>Faster pipelines improve developer productivity and reduce time to recover.</p><ul><li><strong>Parallelize jobs:</strong> run independent tests and builds concurrently.</li><li><strong>Caching:</strong> cache dependencies, Docker layers, and build artifacts.</li><li><strong>Incremental testing:</strong> run only tests affected by changed files when appropriate.</li><li><strong>Smaller artifacts:</strong> use optimized Docker images and multi-stage builds.</li><li><strong>Runner sizing:</strong> use appropriately sized agents and self-hosted runners if needed.</li><li><strong>Fail fast:</strong> run lint and unit tests before expensive integration tests.</li></ul><pre><code class=\"language-yaml\"># GitHub Actions cache example\n- uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n    restore-keys: ${{ runner.os }}-node-</code></pre><p>Measure pipeline stages and optimize the slowest ones first. Avoid premature optimization that sacrifices reliability.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Parallelize jobs and cache dependencies and layers.",
        "Run fast checks first and incremental tests when safe.",
        "Optimize slowest stages and right-size build agents."
      ]
    },
    {
      "question": "Which CI/CD tools have you used? Can you explain a typical CI/CD pipeline?",
      "answer": "<p>Common CI/CD tools include GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Azure DevOps, Travis CI, and Argo CD. A typical pipeline has these stages:</p><ol><li><strong>Source:</strong> trigger on commit/PR.</li><li><strong>Build:</strong> compile code, build Docker image, run security scans.</li><li><strong>Test:</strong> unit tests, integration tests, lint, SAST/DAST.</li><li><strong>Artifact:</strong> push image to registry with commit-based tag.</li><li><strong>Deploy to staging:</strong> run smoke tests and acceptance tests.</li><li><strong>Deploy to production:</strong> canary or blue-green release with monitoring.</li><li><strong>Verify:</strong> automated health checks and rollback on failure.</li></ol><pre><code class=\"language-text\"># Typical pipeline stages\nBuild -&gt; Test -&gt; Package -&gt; Staging Deploy -&gt; Smoke Tests -&gt; Production Deploy -&gt; Verify</code></pre><p>The exact tools depend on team skills, existing ecosystem, and compliance requirements.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Common tools include GitHub Actions, GitLab CI, Jenkins, CircleCI, and Argo CD.",
        "A typical pipeline builds, tests, packages, deploys to staging, and releases to production.",
        "Include security scans, smoke tests, and rollback in the pipeline."
      ]
    },
    {
      "question": "What is the difference between scaling horizontally and scaling vertically?",
      "answer": "<p><strong>Horizontal scaling</strong> adds more machines or pods. <strong>Vertical scaling</strong> increases the resources (CPU, memory) of existing machines.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Horizontal Scaling</th><th style='padding:8px;border:1px solid #ddd;'>Vertical Scaling</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Approach</td><td style='padding:8px;border:1px solid #ddd;'>Add more instances</td><td style='padding:8px;border:1px solid #ddd;'>Bigger instances</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Limit</td><td style='padding:8px;border:1px solid #ddd;'>Near-unlimited</td><td style='padding:8px;border:1px solid #ddd;'>Hardware ceiling</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Downtime</td><td style='padding:8px;border:1px solid #ddd;'>Usually none</td><td style='padding:8px;border:1px solid #ddd;'>Often requires restart</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cost model</td><td style='padding:8px;border:1px solid #ddd;'>Many small machines</td><td style='padding:8px;border:1px solid #ddd;'>Few powerful machines</td></tr></table><pre><code class=\"language-yaml\"># Horizontal scaling in Kubernetes\nkubectl scale deployment app --replicas=10\n\n# Vertical scaling example\nresources:\n  requests:\n    cpu: \"2\"\n    memory: 4Gi</code></pre><p>Cloud-native applications prefer horizontal scaling because it is elastic and resilient.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Horizontal scaling adds more instances; vertical scaling increases instance size.",
        "Horizontal scaling is more elastic and fault tolerant.",
        "Cloud-native apps generally prefer horizontal scaling."
      ]
    },
    {
      "question": "How do you secure cloud infrastructure?",
      "answer": "<p>Cloud security is a shared responsibility between the provider and the customer. Defense in depth is key.</p><ul><li><strong>Identity:</strong> enforce least-privilege IAM, MFA, and service accounts/roles.</li><li><strong>Network:</strong> use private subnets, security groups/NACLs, VPC peering, and TLS everywhere.</li><li><strong>Data:</strong> encrypt at rest (KMS) and in transit.</li><li><strong>Secrets:</strong> use managed secret stores and rotate credentials.</li><li><strong>Monitoring:</strong> enable audit logs, threat detection, and SIEM.</li><li><strong>Compliance:</strong> apply policies, tag resources, and scan for misconfigurations.</li></ul><pre><code class=\"language-json\"># AWS example: restrict S3 bucket\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Deny\",\n    \"Principal\": \"*\",\n    \"Action\": \"s3:*\",\n    \"Resource\": \"arn:aws:s3:::my-bucket/*\",\n    \"Condition\": {\"Bool\": {\"aws:SecureTransport\": \"false\"}}\n  }]\n}</code></pre><p>Regularly review IAM policies, patch systems, run vulnerability scans, and conduct security drills.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Apply defense in depth across identity, network, data, and monitoring layers.",
        "Use least privilege, encryption, and private networking.",
        "Continuously audit, scan, and patch cloud resources."
      ]
    },
    {
      "question": "How do you handle database migrations in a CI/CD pipeline?",
      "answer": "<p>Database migrations must be safe, reversible, and compatible with rolling deployments.</p><ul><li><strong>Versioned migrations:</strong> use tools like Flyway, Liquibase, Alembic, or Atlas.</li><li><strong>Backwards-compatible changes:</strong> add columns/tables first; remove them later after code is updated.</li><li><strong>Pre-deploy migrations:</strong> apply schema changes before application deployment.</li><li><strong>Idempotency:</strong> ensure migrations can run safely multiple times.</li><li><strong>Test data:</strong> run migrations against a staging copy of production data.</li><li><strong>Rollback plan:</strong> keep backups and have rollback scripts ready.</li></ul><pre><code class=\"language-bash\"># Flyway naming convention\nV1__create_users_table.sql\nV2__add_user_index.sql\n\n# Run before app deploy\nflyway migrate -url=$DB_URL</code></pre><p>Avoid destructive changes during active traffic. Use expand/contract pattern for complex refactors.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Use versioned migration tools and backwards-compatible schema changes.",
        "Run migrations before application deployment with backups ready.",
        "Test migrations against representative data and have rollback scripts."
      ]
    },
    {
      "question": "Describe a time you had to troubleshoot a broken CI/CD pipeline.",
      "answer": "<p>Use a structured approach to isolate and fix pipeline failures quickly.</p><ol><li><strong>Reproduce:</strong> re-run the failed job and inspect logs.</li><li><strong>Identify scope:</strong> determine if the failure is code, infrastructure, or dependency-related.</li><li><strong>Check changes:</strong> review recent commits, dependency updates, and environment drift.</li><li><strong>Test locally:</strong> run the failing command in a clean environment.</li><li><strong>Fix and verify:</strong> apply the fix, re-run the pipeline, and add a regression test.</li></ol><pre><code class=\"language-bash\"># Common checks\ngit log --oneline -10\ncat /var/log/build.log\ndocker pull my-image:latest && docker run --rm my-image:latest npm test</code></pre><p>Document the root cause and update runbooks. Reduce recurrence through better tests, pinning dependencies, and immutable build images.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Reproduce the failure and inspect logs to identify the scope.",
        "Check recent changes and test locally before fixing.",
        "Document the incident and add regression protection."
      ]
    },
    {
      "question": "How would you include security checks in a CI/CD pipeline?",
      "answer": "<p>Security should be shifted left and automated in the pipeline.</p><ul><li><strong>Static Application Security Testing (SAST):</strong> scan source code for vulnerabilities.</li><li><strong>Dependency scanning:</strong> check for known CVEs in libraries (Snyk, Dependabot, OWASP Dependency-Check).</li><li><strong>Secret scanning:</strong> detect committed secrets (TruffleHog, GitLeaks).</li><li><strong>Container scanning:</strong> scan images for OS and package vulnerabilities (Trivy, Grype).</li><li><strong>Infrastructure as Code scanning:</strong> check Terraform/CloudFormation for misconfigurations (Checkov, tfsec).</li><li><strong>Dynamic testing (DAST):</strong> test running applications for vulnerabilities.</li></ul><pre><code class=\"language-yaml\"># Example GitLab CI security stage\nstages: [build, test, security, deploy]\n\ncontainer_scan:\n  stage: security\n  image: aquasec/trivy\n  script:\n    - trivy image my-app:$CI_COMMIT_SHA</code></pre><p>Fail the pipeline on critical findings but avoid alert fatigue by tuning severity thresholds.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Shift security left with SAST, dependency, secret, and container scanning.",
        "Scan IaC and run DAST on deployed applications.",
        "Block critical findings and tune thresholds to reduce noise."
      ]
    },
    {
      "question": "What is the difference between containerization and virtualization?",
      "answer": "<p><strong>Virtualization</strong> abstracts hardware to run multiple full operating systems on a hypervisor. <strong>Containerization</strong> abstracts the OS kernel to run isolated user-space processes sharing the host kernel.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Virtualization</th><th style='padding:8px;border:1px solid #ddd;'>Containerization</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Guest OS</td><td style='padding:8px;border:1px solid #ddd;'>One per VM</td><td style='padding:8px;border:1px solid #ddd;'>Shared host kernel</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Startup time</td><td style='padding:8px;border:1px solid #ddd;'>Minutes</td><td style='padding:8px;border:1px solid #ddd;'>Seconds</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Resource overhead</td><td style='padding:8px;border:1px solid #ddd;'>High</td><td style='padding:8px;border:1px solid #ddd;'>Low</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Isolation</td><td style='padding:8px;border:1px solid #ddd;'>Strong hardware-level</td><td style='padding:8px;border:1px solid #ddd;'>Process-level (good but lighter)</td></tr></table><pre><code class=\"language-text\"># VM stack\nApp -&gt; Guest OS -&gt; Hypervisor -&gt; Host OS -&gt; Hardware\n\n# Container stack\nApp -&gt; Container Runtime -&gt; Host OS Kernel -&gt; Hardware</code></pre><p>Containers are ideal for microservices and CI/CD. VMs remain useful for strong isolation, mixed OS workloads, and legacy applications.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud", "Docker"],
      "keyPoints": [
        "Virtualization runs full guest OS instances on a hypervisor.",
        "Containerization shares the host kernel and isolates processes.",
        "Containers are lighter and faster; VMs provide stronger isolation."
      ]
    },
    {
      "question": "What is the difference between TCP and UDP?",
      "answer": "<p><strong>TCP</strong> (Transmission Control Protocol) is connection-oriented, reliable, and ordered. <strong>UDP</strong> (User Datagram Protocol) is connectionless, unreliable, and unordered.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>TCP</th><th style='padding:8px;border:1px solid #ddd;'>UDP</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Connection</td><td style='padding:8px;border:1px solid #ddd;'>Connection-oriented</td><td style='padding:8px;border:1px solid #ddd;'>Connectionless</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reliability</td><td style='padding:8px;border:1px solid #ddd;'>Acks, retransmissions</td><td style='padding:8px;border:1px solid #ddd;'>Best-effort</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Ordering</td><td style='padding:8px;border:1px solid #ddd;'>Guaranteed</td><td style='padding:8px;border:1px solid #ddd;'>Not guaranteed</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use case</td><td style='padding:8px;border:1px solid #ddd;'>HTTP, SSH, databases</td><td style='padding:8px;border:1px solid #ddd;'>DNS, video streaming, gaming</td></tr></table><pre><code class=\"language-text\"># TCP three-way handshake\nClient -&gt; SYN -&gt; Server\nClient &lt;- SYN-ACK &lt;- Server\nClient -&gt; ACK -&gt; Server\n\n# UDP sends datagrams without setup\nClient -&gt; Datagram -&gt; Server</code></pre><p>Choose TCP when reliability matters; choose UDP when low latency and tolerance for packet loss are more important.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud", "Networking"],
      "keyPoints": [
        "TCP is connection-oriented, reliable, and ordered.",
        "UDP is connectionless, lightweight, and best-effort.",
        "TCP suits web and database traffic; UDP suits streaming and real-time communication."
      ]
    },
    {
      "question": "What is Terraform drift detection and how do you handle it?",
      "answer": "<p><strong>Drift</strong> occurs when real infrastructure state diverges from the Terraform-managed state. <strong>Drift detection</strong> identifies these changes.</p><ul><li>Run <code>terraform plan</code> regularly in CI to detect drift.</li><li>Use <code>terraform refresh</code> or plan refresh behavior to update state from reality.</li><li>Terraform Cloud/Enterprise and tools like Spacelift offer scheduled drift detection.</li><li>Investigate manual changes and either import them or revert them.</li></ul><pre><code class=\"language-bash\"># Detect drift\nterraform plan -detailed-exitcode\n# 0 = no changes, 1 = error, 2 = drift detected\n\n# View state\nterraform show\nterraform state list</code></pre><p>Prevent drift by restricting manual console changes, using IAM policies, and applying all changes through Terraform.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "IaC"],
      "keyPoints": [
        "Drift is when infrastructure diverges from Terraform state.",
        "Detect drift with terraform plan and scheduled checks.",
        "Prevent drift by prohibiting manual changes and applying all changes via Terraform."
      ]
    },
    {
      "question": "How do you differentiate between configured and non-configured VMs using Ansible?",
      "answer": "<p>Ansible provides several ways to track configuration state across managed nodes.</p><ul><li><strong>Idempotency:</strong> run playbooks and check the <code>changed</code> status. Many unchanged tasks indicate already-configured hosts.</li><li><strong>Tags and variables:</strong> set a marker variable or file after successful configuration and check for it in later runs.</li><li><strong>Custom facts:</strong> place facts in <code>/etc/ansible/facts.d/</code> to record configuration version.</li><li><strong>Dynamic inventory:</strong> group hosts by configuration status.</li></ul><pre><code class=\"language-yaml\"># Check a configuration marker\n- name: Check if node is configured\n  stat:\n    path: /etc/app/configured.marker\n  register: marker\n\n- name: Apply configuration\n  when: not marker.stat.exists\n  include_tasks: configure.yml</code></pre><p>Ansible is inherently state-desired, so regular runs naturally converge nodes to the desired state regardless of starting condition.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "IaC"],
      "keyPoints": [
        "Use idempotent playbook runs to converge nodes to desired state.",
        "Track configuration status with marker files or custom facts.",
        "Group hosts in dynamic inventory by configuration state."
      ]
    },
    {
      "question": "How do you handle the traffic spike scenario in production?",
      "answer": "<p>Handling traffic spikes requires preparation across architecture, infrastructure, and operations.</p><ul><li><strong>Auto-scaling:</strong> configure HPA/VPA and Cluster Autoscaler or cloud auto-scaling groups.</li><li><strong>Caching:</strong> use CDNs and in-memory caches (Redis/Memcached) to reduce origin load.</li><li><strong>Load shedding:</strong> drop or queue excess traffic gracefully.</li><li><strong>Rate limiting:</strong> protect APIs and databases from abuse.</li><li><strong>Database:</strong> use read replicas, connection pooling, and query optimization.</li><li><strong>Monitoring:</strong> alert on saturation and error rates before users notice.</li></ul><pre><code class=\"language-yaml\"># HPA for traffic spike\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nspec:\n  scaleTargetRef:\n    kind: Deployment\n    name: api\n  minReplicas: 3\n  maxReplicas: 100\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        averageUtilization: 60\n        type: Utilization</code></pre><p>Run load tests and chaos experiments to validate behavior under spike conditions.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "Use auto-scaling, caching, and CDNs to absorb traffic spikes.",
        "Protect backends with rate limiting, load shedding, and connection pooling.",
        "Validate with load testing and monitor saturation signals."
      ]
    },
    {
      "question": "What is your day-to-day work like as a DevOps engineer?",
      "answer": "<p>A DevOps engineer bridges development and operations, focusing on automation, reliability, and developer experience.</p><ul><li><strong>CI/CD:</strong> maintain and improve build, test, and deployment pipelines.</li><li><strong>Infrastructure:</strong> manage cloud resources and Kubernetes clusters via IaC.</li><li><strong>Observability:</strong> monitor metrics, logs, and traces; respond to alerts.</li><li><strong>Incident response:</strong> troubleshoot outages and participate in postmortems.</li><li><strong>Platform enablement:</strong> provide self-service tooling, templates, and documentation for developers.</li><li><strong>Security:</strong> implement least privilege, secret management, and compliance controls.</li></ul><pre><code class=\"language-text\"># Typical daily activities\n- Review overnight alerts and pipeline failures\n- Pair with developers on deployment issues\n- Update Terraform modules or Helm charts\n- Tune monitoring dashboards and alerts\n- Run chaos experiments or disaster recovery drills</code></pre><p>Prioritize reducing toil through automation and improving the reliability of the delivery platform.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud"],
      "keyPoints": [
        "DevOps engineers automate CI/CD, infrastructure, and operations.",
        "Daily work includes incident response, observability, and platform enablement.",
        "The goal is to reduce toil and improve system reliability."
      ]
    },
    {
      "question": "How would you set up an SSL certificate for a Node.js service running in Docker on EC2?",
      "answer": "<p>You can terminate TLS at a load balancer or configure it directly in the container/Node.js process.</p><ol><li><strong>Obtain a certificate:</strong> use AWS ACM (free) or Let's Encrypt.</li><li><strong>Option A \u2014 ALB termination:</strong> attach the ACM certificate to an Application Load Balancer and forward plain HTTP to the EC2 instance. This is simplest.</li><li><strong>Option B \u2014 Node.js directly:</strong> mount the certificate files into the container and use Node's <code>https</code> module or a reverse proxy like Nginx.</li><li><strong>Renewal:</strong> ACM manages renewal automatically; Let's Encrypt requires automation.</li></ol><pre><code class=\"language-javascript\"># Node.js HTTPS server\nconst https = require('https');\nconst fs = require('fs');\nhttps.createServer({\n  key: fs.readFileSync('/certs/key.pem'),\n  cert: fs.readFileSync('/certs/cert.pem')\n}, app).listen(443);\n\n# Docker run\ndocker run -p 443:443 -v /host/certs:/certs my-node-app</code></pre><p>For production, prefer ALB/NLB termination to simplify certificate management and reduce attack surface in the container.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Docker"],
      "keyPoints": [
        "Use AWS ACM or Let's Encrypt to obtain a certificate.",
        "Terminate TLS at the load balancer for simpler management.",
        "If terminating in the container, mount certs and use Node's https module or Nginx."
      ]
    },
    {
      "question": "What is cold start in AWS Lambda and how does it affect serverless applications?",
      "answer": "<p>A <strong>cold start</strong> occurs when AWS Lambda initializes a new execution environment to handle a request. It includes provisioning resources, downloading the code, and running initialization code.</p><ul><li><strong>Causes:</strong> first invocation, concurrency scale-out, deployment update, or function being idle.</li><li><strong>Impact:</strong> adds latency, which is especially noticeable for Java, .NET, and functions with large dependencies.</li><li><strong>Mitigation:</strong> provisioned concurrency, keep-alive pings, smaller deployment packages, initialization outside handler, and choosing faster runtimes (Python, Node.js, Go).</li></ul><pre><code class=\"language-python\"># Initialization runs once per environment\nimport boto3\nclient = boto3.client('dynamodb')  # outside handler\n\ndef lambda_handler(event, context):\n    # reuse client; only this runs per warm invocation\n    return client.get_item(...)</code></pre><p>Warm starts reuse the execution environment, so initialization outside the handler is critical for performance.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "Cold start is the latency of initializing a new Lambda execution environment.",
        "It affects idle or scaling functions and languages with high startup cost.",
        "Mitigate with provisioned concurrency, small packages, and initialization outside the handler."
      ]
    },
    {
      "question": "What is the difference between EC2 and serverless services like AWS Lambda?",
      "answer": "<p><strong>EC2</strong> provides virtual servers where you manage the OS, patching, scaling, and capacity. <strong>Lambda</strong> is serverless: AWS manages infrastructure and you run code in response to events.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>EC2</th><th style='padding:8px;border:1px solid #ddd;'>Lambda</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Management</td><td style='padding:8px;border:1px solid #ddd;'>OS, patching, scaling</td><td style='padding:8px;border:1px solid #ddd;'>Fully managed</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Manual or Auto Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Automatic</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Billing</td><td style='padding:8px;border:1px solid #ddd;'>Per second of capacity</td><td style='padding:8px;border:1px solid #ddd;'>Per request + compute time</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use case</td><td style='padding:8px;border:1px solid #ddd;'>Long-running, custom OS</td><td style='padding:8px;border:1px solid #ddd;'>Event-driven, short tasks</td></tr></table><pre><code class=\"language-python\"># EC2: long-running server\n# Lambda: event-driven handler\ndef lambda_handler(event, context):\n    return {'statusCode': 200, 'body': 'Hello'}</code></pre><p>Choose EC2 for control and persistent workloads; choose Lambda for event-driven, variable, or short-lived workloads.</p>",
      "difficulty": "Beginner",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "EC2 requires managing servers; Lambda is fully managed and event-driven.",
        "EC2 bills for provisioned capacity; Lambda bills per request and duration.",
        "EC2 suits long-running workloads; Lambda suits short, event-driven tasks."
      ]
    },
    {
      "question": "How does a CDN work and what can be cached in it?",
      "answer": "<p>A <strong>CDN</strong> (Content Delivery Network) distributes content from origin servers to edge locations closer to users, reducing latency and offloading origin traffic.</p><ul><li><strong>Cacheable content:</strong> static files (images, CSS, JS, videos), static HTML, fonts, and API responses with proper cache headers.</li><li><strong>Cache keys:</strong> usually URL, query strings, and headers.</li><li><strong>TTL:</strong> cache-control headers determine how long content stays at the edge.</li><li><strong>Invalidation:</strong> purge cached content when it changes.</li></ul><pre><code class=\"language-bash\"># Cache-Control header example\nCache-Control: public, max-age=3600\n\n# CloudFront invalidation\naws cloudfront create-invalidation --distribution-id ABC --paths \"/images/*\"</code></pre><p>Dynamic, personalized, or uncacheable content should not be cached. Use CDNs for static assets and cacheable APIs.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Networking"],
      "keyPoints": [
        "A CDN caches content at edge locations near users.",
        "Cache static files and API responses with proper cache headers.",
        "Use TTLs and invalidation to keep content fresh."
      ]
    },
    {
      "question": "How do you create and configure S3 buckets with different access levels?",
      "answer": "<p>Amazon S3 buckets can be configured for private, public, or restricted access using a combination of ACLs, bucket policies, IAM, and Block Public Access settings.</p><ul><li><strong>Private:</strong> default; only the owner and authorized IAM users/roles have access.</li><li><strong>Public read:</strong> bucket policy allows <code>GetObject</code> for everyone; Block Public Access must be disabled.</li><li><strong>Cross-account:</strong> bucket policy grants access to another AWS account.</li><li><strong>Presigned URLs:</strong> temporary access for specific objects without changing bucket permissions.</li></ul><pre><code class=\"language-json\"># Private bucket policy - deny unencrypted transport\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Deny\",\n    \"Principal\": \"*\",\n    \"Action\": \"s3:*\",\n    \"Resource\": [\"arn:aws:s3:::my-bucket\", \"arn:aws:s3:::my-bucket/*\"],\n    \"Condition\": {\"Bool\": {\"aws:SecureTransport\": \"false\"}}\n  }]\n}</code></pre><p>Prefer bucket policies and IAM over ACLs. Enable versioning, logging, and encryption by default.</p>",
      "difficulty": "Beginner",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "S3 access can be controlled with bucket policies, IAM, ACLs, and presigned URLs.",
        "Block Public Access should stay enabled unless truly public content is needed.",
        "Prefer policies and encryption; avoid overly permissive ACLs."
      ]
    },
    {
      "question": "How do you build a VPC with subnets and an Internet Gateway?",
      "answer": "<p>A VPC is a logically isolated network in AWS. A typical setup uses public and private subnets across multiple Availability Zones.</p><ol><li>Create a VPC with a CIDR block (e.g., <code>10.0.0.0/16</code>).</li><li>Create public and private subnets in multiple AZs.</li><li>Attach an Internet Gateway (IGW) to the VPC.</li><li>Add a route in the public subnet route table to the IGW.</li><li>Add a NAT Gateway in a public subnet for private subnet outbound access.</li><li>Configure Security Groups and NACLs.</li></ol><pre><code class=\"language-hcl\"># Terraform example\nresource \"aws_vpc\" \"main\" {\n  cidr_block = \"10.0.0.0/16\"\n}\n\nresource \"aws_internet_gateway\" \"igw\" {\n  vpc_id = aws_vpc.main.id\n}\n\nresource \"aws_subnet\" \"public\" {\n  vpc_id            = aws_vpc.main.id\n  cidr_block        = \"10.0.1.0/24\"\n  availability_zone = \"us-east-1a\"\n  map_public_ip_on_launch = true\n}</code></pre><p>Always design for multi-AZ high availability and least-privilege network access.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "Create a VPC, subnets, IGW, and route tables for network isolation.",
        "Public subnets route to the IGW; private subnets use NAT Gateways for outbound access.",
        "Use multi-AZ design and restrict traffic with Security Groups and NACLs."
      ]
    },
    {
      "question": "How do you configure Route 53 failover routing for high availability?",
      "answer": "<p>Route 53 failover routing automatically routes traffic to a healthy resource and fails over to a backup when the primary becomes unhealthy.</p><ol><li>Create health checks for the primary endpoint (HTTP/HTTPS/TCP).</li><li>Create two records: primary and secondary.</li><li>Set the primary record to <strong>Failover: Primary</strong> and associate the health check.</li><li>Set the secondary record to <strong>Failover: Secondary</strong>.</li></ol><pre><code class=\"language-bash\"># Route 53 CLI health check\naws route53 create-health-check --caller-reference 123 \n  --health-check-config '{\"IPAddress\": \"1.2.3.4\", \"Port\": 443, \"Type\": \"HTTPS\", \"ResourcePath\": \"/health\"}'\n\n# Primary record failover routing policy\nName: app.example.com\nType: A\nValue: 1.2.3.4\nRouting: Failover - Primary\nHealth Check: hc-123</code></pre><p>Ensure health checks are reliable and that the secondary region can handle full traffic.</p>",
      "difficulty": "Beginner",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "Route 53 failover uses health checks to detect primary endpoint failure.",
        "Primary and secondary records route traffic based on health status.",
        "Design the secondary region to handle full failover capacity."
      ]
    },
    {
      "question": "How do you audit and enforce least-privilege IAM permissions?",
      "answer": "<p>Least privilege means granting only the permissions required for a specific task.</p><ul><li><strong>IAM Access Analyzer:</strong> identify external access and unused permissions.</li><li><strong>IAM credentials report:</strong> review users, access keys, and last used dates.</li><li><strong>Service-linked roles:</strong> use AWS-managed policies cautiously and create custom policies when needed.</li><li><strong>Policy conditions:</strong> restrict by IP, MFA, time, or VPC endpoints.</li><li><strong>Regular reviews:</strong> remove unused users, roles, and permissions.</li></ul><pre><code class=\"language-json\"># IAM policy with condition\n{\n  \"Effect\": \"Allow\",\n  \"Action\": \"s3:GetObject\",\n  \"Resource\": \"arn:aws:s3:::my-bucket/*\",\n  \"Condition\": {\"IpAddress\": {\"aws:SourceIp\": [\"203.0.113.0/24\"]}}\n}</code></pre><p>Automate auditing with AWS Config rules, IAM Access Analyzer findings, and third-party CSPM tools.</p>",
      "difficulty": "Beginner",
      "tags": ["AWS", "DevOps", "Cloud"],
      "keyPoints": [
        "Grant only permissions needed for each role or user.",
        "Use IAM Access Analyzer and credentials reports to find excess access.",
        "Automate audits with AWS Config and CSPM tools."
      ]
    },
    {
      "question": "Optimize a Dockerfile for a Node.js application to reduce image size.",
      "answer": "<p>Optimizing a Node.js Docker image involves choosing a small base image, leveraging layer caching, and using multi-stage builds.</p><ul><li><strong>Small base:</strong> use <code>node:20-alpine</code> or distroless images.</li><li><strong>Layer caching:</strong> copy package files and run <code>npm ci</code> before copying source code.</li><li><strong>Multi-stage:</strong> build in one stage and copy only production artifacts to the final image.</li><li><strong>Production deps:</strong> use <code>npm ci --only=production</code>.</li></ul><pre><code class=\"language-dockerfile\"># Multi-stage Dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist\nUSER node\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]</code></pre><p>Also add a <code>.dockerignore</code> file to exclude node_modules, logs, and source control files.</p>",
      "difficulty": "Intermediate",
      "tags": ["Docker", "DevOps", "Cloud"],
      "keyPoints": [
        "Use small base images like Alpine or distroless.",
        "Leverage layer caching and multi-stage builds.",
        "Install only production dependencies and run as a non-root user."
      ]
    },
    {
      "question": "How do you resolve a Docker container running as root user security issue?",
      "answer": "<p>Running containers as root increases the blast radius if the container is compromised. Mitigate by using a non-root user.</p><ul><li><strong>Create a non-root user</strong> in the Dockerfile.</li><li><strong>Set USER</strong> instruction to that user.</li><li><strong>Run with security context</strong> in Kubernetes using <code>runAsNonRoot</code> and <code>runAsUser</code>.</li><li><strong>Drop capabilities</strong> and set a read-only root filesystem where possible.</li></ul><pre><code class=\"language-dockerfile\"># Dockerfile\nFROM node:20-alpine\nRUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001\nWORKDIR /app\nCOPY --chown=nodejs:nodejs . .\nUSER nodejs\nCMD [\"node\", \"index.js\"]\n\n# Kubernetes security context\nsecurityContext:\n  runAsNonRoot: true\n  runAsUser: 1001\n  readOnlyRootFilesystem: true\n  allowPrivilegeEscalation: false</code></pre><p>Also scan images for vulnerabilities and avoid running privileged containers.</p>",
      "difficulty": "Intermediate",
      "tags": ["Docker", "DevOps", "Cloud"],
      "keyPoints": [
        "Create and switch to a non-root user in the Dockerfile.",
        "Enforce runAsNonRoot and runAsUser in Kubernetes.",
        "Drop capabilities and use read-only root filesystems."
      ]
    },
    {
      "question": "How do you handle slow Docker build times and optimize layer caching?",
      "answer": "<p>Slow Docker builds usually come from poor layer ordering, large contexts, or unoptimized dependency installation.</p><ul><li><strong>Order layers by change frequency:</strong> copy and install dependencies before copying application source.</li><li><strong>Use BuildKit:</strong> enable with <code>DOCKER_BUILDKIT=1</code> for faster, parallel builds.</li><li><strong>Cache mounts:</strong> use <code>--mount=type=cache</code> for package managers.</li><li><strong>Small context:</strong> use a focused <code>.dockerignore</code>.</li><li><strong>Multi-stage builds:</strong> avoid shipping build tools in final images.</li></ul><pre><code class=\"language-dockerfile\"># BuildKit cache mount\nRUN --mount=type=cache,target=/root/.npm \\\n    npm ci\n\n# Layer ordering\nCOPY package*.json ./\nRUN npm ci           # cached unless package files change\nCOPY . .\nRUN npm run build    # only rebuilds when source changes</code></pre><p>Profile builds with <code>docker build --progress=plain</code> and identify slow stages.</p>",
      "difficulty": "Beginner",
      "tags": ["Docker", "DevOps", "Cloud"],
      "keyPoints": [
        "Order layers so rarely changing steps are cached.",
        "Use BuildKit and cache mounts for package managers.",
        "Reduce build context and use multi-stage builds."
      ]
    },
    {
      "question": "What are Docker image layer metadata issues and how do you troubleshoot them?",
      "answer": "<p>Docker image layers are defined by metadata such as layer IDs, parent chain, and content hashes. Issues can arise from corrupted layer data, registry problems, or build cache inconsistency.</p><ul><li><strong>Symptoms:</strong> pull/push failures, layer not found, unexpected image size, or cache misses.</li><li><strong>Troubleshooting:</strong> inspect layers with <code>docker history</code>, export the image with <code>docker save</code>, and check registry logs.</li><li><strong>Cache:</strong> prune invalid cache with <code>docker builder prune</code>.</li><li><strong>Reproducibility:</strong> pin base image digests to avoid drift.</li></ul><pre><code class=\"language-bash\"># Inspect image layers\ndocker history my-image:latest\ndocker inspect my-image:latest\n\n# Save and examine\ndocker save my-image:latest -o image.tar\ntar -tf image.tar\n\n# Clean build cache\ndocker builder prune -f</code></pre><p>Use multi-stage builds and deterministic commands to keep layer metadata clean and reproducible.</p>",
      "difficulty": "Intermediate",
      "tags": ["Docker", "DevOps", "Cloud"],
      "keyPoints": [
        "Layer metadata issues cause pull/push failures and cache misses.",
        "Inspect history, inspect the image, and prune bad cache.",
        "Pin base images and keep builds deterministic."
      ]
    },
    {
      "question": "How do you amend a Git commit message that accidentally contains confidential info?",
      "answer": "<p>If the commit has not been pushed, use <code>git commit --amend</code>. If it has been pushed to a shared branch, rewriting history can disrupt teammates.</p><ol><li>Unpushed: <code>git commit --amend -m \"new message\"</code></li><li>Pushed to a feature branch: amend and force-push if coordinated.</li><li>Confidential info in the code itself: rotate the secret and use <code>git filter-repo</code> or BFG Repo-Cleaner to remove it from history.</li></ol><pre><code class=\"language-bash\"># Amend last commit message\ngit commit --amend -m \"fix: correct validation logic\"\n\n# Remove sensitive file from entire history\ngit filter-repo --path secret.txt --invert-paths\n# Then force-push and rotate the exposed secret</code></pre><p>Always treat exposed secrets as compromised: rotate credentials immediately.</p>",
      "difficulty": "Beginner",
      "tags": ["Git", "DevOps", "Cloud"],
      "keyPoints": [
        "Use git commit --amend for unpushed commits.",
        "For pushed commits, coordinate force-push or use filter-repo.",
        "Rotate any exposed secrets regardless of history cleanup."
      ]
    },
    {
      "question": "How do you revert a bad commit from the main branch in Git?",
      "answer": "<p>Use <code>git revert</code> to create a new commit that undoes a previous commit while preserving history. This is the safest option for shared branches.</p><pre><code class=\"language-bash\"># Revert the last commit\ngit revert HEAD\n\n# Revert a specific commit by hash\ngit revert abc1234\n\n# Revert without auto-commit\ngit revert -n abc1234\ngit commit -m \"Revert: remove premature optimization\"</code></pre><p>Avoid <code>git reset</code> on shared branches because it rewrites history. Use reset only on local unshared branches.</p>",
      "difficulty": "Beginner",
      "tags": ["Git", "DevOps", "Cloud"],
      "keyPoints": [
        "git revert creates a new commit that undoes a previous change.",
        "It is safe for shared branches because it preserves history.",
        "Avoid git reset on shared branches."
      ]
    },
    {
      "question": "How do you recover an accidentally deleted branch in Git?",
      "answer": "<p>Git keeps unreachable commits for a grace period (default ~30 days), so deleted branches can usually be recovered via the reflog.</p><pre><code class=\"language-bash\"># Find the branch tip in the reflog\ngit reflog\n# Example output:\n# abc1234 HEAD@{3}: checkout: moving from feature to main\n# def5678 HEAD@{4}: commit: add feature X\n\n# Recreate the branch\ngit checkout -b feature def5678\n\n# Alternative: use git fsck\ngit fsck --unreachable --no-reflogs | grep commit</code></pre><p>If the branch was never pushed and garbage collection has run, recovery may not be possible. Push important branches to a remote as a backup.</p>",
      "difficulty": "Beginner",
      "tags": ["Git", "DevOps", "Cloud"],
      "keyPoints": [
        "Use git reflog to find the deleted branch tip.",
        "Recreate the branch from the commit hash.",
        "Push important branches to a remote to avoid unrecoverable loss."
      ]
    },
    {
      "question": "How do you resolve merge conflicts in Git during a rebase?",
      "answer": "<p>During a rebase, Git replays commits one by one. Conflicts are resolved commit by commit.</p><pre><code class=\"language-bash\"># Rebase onto main\ngit rebase main\n\n# When conflict appears, edit files and stage\nvim conflicting-file.js\ngit add conflicting-file.js\n\n# Continue rebase\ngit rebase --continue\n\n# Or abort if needed\ngit rebase --abort</code></pre><p>For each conflict, decide whether to keep local changes, incoming changes, or a combination. Run tests after the rebase completes.</p>",
      "difficulty": "Intermediate",
      "tags": ["Git", "DevOps", "Cloud"],
      "keyPoints": [
        "Pause at each conflicting commit during rebase.",
        "Resolve conflicts, stage files, and run git rebase --continue.",
        "Abort with git rebase --abort if the rebase becomes too complex."
      ]
    },
    {
      "question": "How do you squash messy commits into a clean commit history?",
      "answer": "<p>Squashing combines multiple commits into one, producing a cleaner history before merging.</p><pre><code class=\"language-bash\"># Interactive rebase last 5 commits\ngit rebase -i HEAD~5\n\n# In editor, change pick to squash (or s) for commits to combine\npick abc1111 Add feature base\nsquash abc2222 Fix typo\nsquash abc3333 Address review comment\n\n# Alternative: squash during merge\ngit merge --squash feature-branch\ngit commit -m \"feat: add user authentication\"</code></pre><p>Only squash local or feature-branch commits. Avoid squashing commits already shared with others.</p>",
      "difficulty": "Intermediate",
      "tags": ["Git", "DevOps", "Cloud"],
      "keyPoints": [
        "Use interactive rebase or merge --squash to combine commits.",
        "Squash only local or feature-branch history.",
        "Write a clear final commit message."
      ]
    },
    {
      "question": "How do you implement commit-based CI/CD image tagging?",
      "answer": "<p>Commit-based tagging ties Docker images to a specific source revision, making deployments traceable and reproducible.</p><pre><code class=\"language-yaml\"># GitLab CI example\nvariables:\n  IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\nbuild:\n  script:\n    - docker build -t $IMAGE .\n    - docker push $IMAGE\n\n# GitHub Actions example\n- name: Build and push\n  run: |\n    IMAGE=ghcr.io/${{ github.repository }}:${{ github.sha }}\n    docker build -t $IMAGE .\n    docker push $IMAGE</code></pre><p>Also tag with branch names or semantic versions for human readability, but use the commit SHA as the immutable deployment reference.</p>",
      "difficulty": "Beginner",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Tag images with the commit SHA for traceability.",
        "Use the immutable SHA as the deployment reference.",
        "Add human-readable tags like branch or version as secondary tags."
      ]
    },
    {
      "question": "How do you implement a matrix build strategy in GitHub Actions?",
      "answer": "<p>A matrix strategy lets you run the same job with different combinations of variables, such as OS, language versions, or dependency sets.</p><pre><code class=\"language-yaml\">jobs:\n  test:\n    runs-on: ${{ matrix.os }}\n    strategy:\n      fail-fast: false\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node: [18, 20, 22]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm ci\n      - run: npm test</code></pre><p>Use <code>fail-fast: false</code> to see all matrix results, and include/exclude specific combinations when needed.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Use strategy.matrix to run jobs across multiple combinations.",
        "Matrix variables can include OS, language versions, and dependencies.",
        "Use fail-fast: false to see all results before failing."
      ]
    },
    {
      "question": "How do you implement concurrency control to cancel in-progress workflows in GitHub Actions?",
      "answer": "<p>GitHub Actions supports concurrency groups to ensure only one instance of a workflow or job runs at a time, canceling older runs when a newer one starts.</p><pre><code class=\"language-yaml\">concurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test</code></pre><p>This is useful for feature branches where you only care about the latest commit. Avoid canceling production deployments.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "CI/CD"],
      "keyPoints": [
        "Use concurrency.group to group related workflow runs.",
        "Set cancel-in-progress: true to cancel stale runs.",
        "Protect production deployments from unwanted cancellation."
      ]
    },
    {
      "question": "How do you fix a Kubernetes pod failing to mount a secret?",
      "answer": "<p>A pod failing to mount a secret is usually due to the secret not existing, being in the wrong namespace, or permission issues.</p><pre><code class=\"language-bash\"># Verify secret exists and is in correct namespace\nkubectl get secret my-secret -n my-namespace\nkubectl describe pod my-pod -n my-namespace\n\n# Check secret keys match the volume projection\nkubectl get secret my-secret -o yaml\n\n# Common pod spec issues\nvolumes:\n- name: secret-vol\n  secret:\n    secretName: my-secret\n    items:\n    - key: password\n      path: password.txt</code></pre><p>Ensure the secret name and keys match the pod spec. Check RBAC if the pod uses a service account with limited secret access.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Verify the secret exists in the same namespace as the pod.",
        "Check secret keys and pod volume projection match.",
        "Review pod events and RBAC permissions."
      ]
    },
    {
      "question": "How do you fix a Kubernetes service returning 503 errors?",
      "answer": "<p>A 503 from a Kubernetes Service usually means no healthy endpoints are available.</p><pre><code class=\"language-bash\"># Check endpoints\nkubectl get endpoints my-service\n\n# Check pod readiness\nkubectl get pods -l app=my-app\nkubectl describe pod &lt;pod&gt;\n\n# Check readiness probe\nkubectl get pod &lt;pod&gt; -o yaml | grep -A10 readinessProbe\n\n# Check selector labels\nkubectl get svc my-service -o yaml</code></pre><p>Common causes: pods not ready, selector mismatch, all pods failing readiness probes, or endpointslice delays. Verify labels match the Service selector.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Check that endpoints exist and pods are ready.",
        "Verify selector labels match between Service and pods.",
        "Inspect readiness probes and pod logs."
      ]
    },
    {
      "question": "How do you troubleshoot a non-scaling Horizontal Pod Autoscaler?",
      "answer": "<p>If HPA is not scaling, check metrics, resource requests, and HPA conditions.</p><pre><code class=\"language-bash\"># Describe HPA\nkubectl describe hpa my-hpa\n\n# Check metrics server\nkubectl top pods\nkubectl top nodes\n\n# Verify resource requests are set\nkubectl get deployment my-app -o yaml | grep -A5 resources\n\n# Check HPA status\nkubectl get hpa my-hpa -o yaml</code></pre><p>Common issues: missing metrics server, resource requests not set, current replicas already at maxReplicas, or stabilizationWindow preventing scale-down.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Use kubectl describe hpa to see conditions and events.",
        "Ensure metrics server is running and resource requests are configured.",
        "Check min/max replicas and stabilization windows."
      ]
    },
    {
      "question": "How do you handle a constantly restarting Kubernetes deployment?",
      "answer": "<p>Constant restarts are usually caused by application crashes, failed health probes, OOM kills, or misconfiguration.</p><pre><code class=\"language-bash\"># Inspect pod status and restart count\nkubectl get pods -l app=my-app\nkubectl describe pod &lt;pod&gt;\n\n# View previous logs\nkubectl logs &lt;pod&gt; --previous\n\n# Check events and resource limits\nkubectl get events --sort-by='.lastTimestamp'\nkubectl get pod &lt;pod&gt; -o yaml | grep -A10 resources</code></pre><p>Fix the underlying cause: correct startup command, increase memory limits, fix probe endpoints, or resolve dependency failures.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Check pod status, restart count, and previous logs.",
        "Look for OOMKilled, probe failures, and application errors.",
        "Fix the root cause rather than masking symptoms."
      ]
    },
    {
      "question": "What happens when a Pod crashes in Kubernetes?",
      "answer": "<p>When a pod crashes, the kubelet on the node detects the container exit and reacts according to the pod's <strong>restart policy</strong>.</p><ul><li><strong>Restart policies:</strong> <code>Always</code> (restart on any exit, default), <code>OnFailure</code> (restart only on non-zero exit), <code>Never</code> (do not restart).</li><li><strong>CrashLoopBackOff:</strong> if the container keeps crashing, the kubelet applies an exponential backoff delay (10s, 20s, 40s, up to 5 minutes) before each restart attempt.</li><li><strong>Logs and events:</strong> previous container logs are preserved (use <code>--previous</code>), and Kubernetes records events that can be inspected with <code>kubectl describe pod</code>.</li><li><strong>Service endpoints:</strong> if a readiness probe fails, the pod is removed from Service endpoints so traffic stops immediately, even before a restart.</li></ul><pre><code class=\"language-bash\">kubectl describe pod &lt;pod&gt;        # view restart count and events\nkubectl logs &lt;pod&gt; --previous       # inspect logs from the crashed container\nkubectl get events --sort-by='.lastTimestamp'</code></pre><p>Diagnose by inspecting the previous logs, checking exit codes, OOM events, and liveness/readiness probe results.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Kubelet restarts containers based on the pod's restart policy (Always, OnFailure, Never).",
        "CrashLoopBackOff applies exponential backoff between restart attempts.",
        "Failed readiness probes remove the pod from Service endpoints so it stops receiving traffic."
      ]
    },
    {
      "question": "Difference between Deployment, StatefulSet, and DaemonSet?",
      "answer": "<p>These three controllers manage pods differently based on the workload's identity and scheduling needs.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Controller</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th><th style='padding:8px;border:1px solid #ddd;'>Identity</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deployment</td><td style='padding:8px;border:1px solid #ddd;'>Stateless, identical replicas</td><td style='padding:8px;border:1px solid #ddd;'>Interchangeable pods</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>StatefulSet</td><td style='padding:8px;border:1px solid #ddd;'>Stateful apps, databases</td><td style='padding:8px;border:1px solid #ddd;'>Stable, ordered, persistent</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>DaemonSet</td><td style='padding:8px;border:1px solid #ddd;'>Node-level agents (logs, monitoring)</td><td style='padding:8px;border:1px solid #ddd;'>One pod per node</td></tr></table><ul><li><strong>Deployment:</strong> replicas are interchangeable; rolling updates and rollbacks are simple. Best for stateless web services and APIs.</li><li><strong>StatefulSet:</strong> each pod has a stable hostname (pod-0, pod-1, ...), stable network identity, and its own PersistentVolumeClaim via <code>volumeClaimTemplates</code>. Pods are created, scaled, and updated in order.</li><li><strong>DaemonSet:</strong> ensures one pod runs on every (or selected) node, ideal for log collectors (Fluentd), node exporters (Prometheus), and CNI plugins.</li></ul><pre><code class=\"language-yaml\"># DaemonSet example\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: node-exporter\nspec:\n  selector:\n    matchLabels: {app: node-exporter}\n  template:\n    metadata:\n      labels: {app: node-exporter}\n    spec:\n      containers:\n      - name: node-exporter\n        image: prom/node-exporter:latest</code></pre><p>Choose Deployment for stateless services, StatefulSet for clustered stateful services, and DaemonSet for node-level infrastructure agents.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Deployment manages interchangeable stateless replicas.",
        "StatefulSet gives pods stable identity, ordered operations, and per-pod persistent storage.",
        "DaemonSet runs one pod per node, ideal for logging and monitoring agents."
      ]
    },
    {
      "question": "How does Kubernetes Service Discovery work?",
      "answer": "<p>Kubernetes service discovery lets pods reliably find and reach other services even as pod IPs change.</p><ul><li><strong>DNS-based (primary):</strong> CoreDNS runs as a cluster add-on and assigns DNS records for every Service. Pods can resolve services by name (e.g., <code>my-service.my-namespace.svc.cluster.local</code>).</li><li><strong>Environment variables:</strong> when a pod starts, Kubernetes injects <code>SERVICE_HOST</code> and <code>SERVICE_PORT</code> variables for every Service in the same namespace. Older pattern; DNS is preferred.</li><li><strong>Service registry:</strong> the API server tracks Services and Endpoints/EndpointSlices, which list the IPs of pods matching the Service selector.</li><li><strong>kube-proxy:</strong> programs iptables or IPVS rules on each node so that traffic to a Service's virtual IP is load-balanced to the underlying pod IPs.</li></ul><pre><code class=\"language-bash\"># Resolve a service from inside a pod\nnslookup my-service\nnslookup my-service.default.svc.cluster.local\n\n# View endpoints\nkubectl get endpoints my-service</code></pre><p>Service types determine exposure: <strong>ClusterIP</strong> (internal), <strong>NodePort</strong> (each node, static port), <strong>LoadBalancer</strong> (cloud LB), <strong>ExternalName</strong> (CNAME to external DNS).</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "CoreDNS provides cluster DNS for service discovery.",
        "kube-proxy programs iptables/IPVS rules for service-to-pod load balancing.",
        "Service types are ClusterIP, NodePort, LoadBalancer, and ExternalName."
      ]
    },
    {
      "question": "HPA vs VPA — when to use which?",
      "answer": "<p><strong>Horizontal Pod Autoscaler (HPA)</strong> and <strong>Vertical Pod Autoscaler (VPA)</strong> solve different scaling problems and should not be used on the same resource metric.</p><ul><li><strong>HPA:</strong> changes the <em>number of pod replicas</em> based on CPU, memory, or custom/external metrics. Best for stateless services that scale out under load.</li><li><strong>VPA:</strong> changes the <em>resource requests and limits</em> of existing pods (or creates new ones) to right-size them. Best for finding optimal CPU/memory and reducing over-provisioning.</li></ul><pre><code class=\"language-yaml\"># HPA based on CPU utilization\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nspec:\n  scaleTargetRef:\n    kind: Deployment\n    name: web\n  minReplicas: 2\n  maxReplicas: 20\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target: {type: Utilization, averageUtilization: 70}\n\n# VPA example\napiVersion: autoscaling.k8s.io/v1\nkind: VerticalPodAutoscaler\nspec:\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: web\n  updatePolicy: {updateMode: Auto}</code></pre><p>Use HPA for traffic spikes and stateless workloads. Use VPA to right-size resource requests. Do not use both on the same CPU/memory metric, or they will fight; you can run VPA in <code>recommendation</code> mode and feed values into HPA.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "HPA scales the number of pod replicas based on metrics.",
        "VPA adjusts CPU/memory requests and limits to right-size pods.",
        "Do not use HPA and VPA on the same resource metric; they conflict."
      ]
    },
    {
      "question": "What causes pod eviction in Kubernetes?",
      "answer": "<p>Pod eviction is the termination of a pod by Kubernetes, either to free resources on a node (<strong>node-pressure eviction</strong>) or as a result of an explicit API call (<strong>API-initiated eviction</strong>).</p><ul><li><strong>Node-pressure eviction:</strong> the kubelet's eviction manager monitors disk, memory, and PID pressure. When thresholds are crossed, it terminates pods to reclaim resources. Order is driven by pod priority, QoS class, and consumption relative to requests.</li><li><strong>Eviction thresholds:</strong> configured via kubelet flags or eviction signals (e.g., <code>memory.available&lt;500Mi</code>). Soft thresholds use grace periods; hard thresholds trigger immediate eviction.</li><li><strong>Graceful termination:</strong> the kubelet sends <code>SIGTERM</code>, waits <code>terminationGracePeriodSeconds</code> (default 30s), then <code>SIGKILL</code>. PreStop hooks run before termination.</li><li><strong>API-initiated eviction:</strong> triggered by <code>kubectl drain</code>, node deletion, or eviction API calls; respects <strong>PodDisruptionBudgets (PDBs)</strong>.</li><li><strong>QoS classes:</strong> BestEffort pods are evicted first, then Burstable, then Guaranteed.</li></ul><pre><code class=\"language-bash\">kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data\nkubectl describe pod &lt;pod&gt;   # check reason: Evicted</code></pre><p>Use PDBs to limit voluntary disruptions, set appropriate resource requests, and run critical pods with Guaranteed QoS where eviction should be avoided.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Node-pressure eviction frees resources when disk, memory, or PIDs exceed thresholds.",
        "API-initiated eviction happens via drain, node deletion, or explicit API calls.",
        "PodDisruptionBudgets protect workloads from voluntary disruptions; QoS class affects eviction priority."
      ]
    },
    {
      "question": "How do you manage secrets securely in Kubernetes?",
      "answer": "<p>Kubernetes <strong>Secrets</strong> store sensitive data like passwords, tokens, and keys. By default, a Secret is just base64-encoded in etcd — not encrypted — so additional controls are needed for real security.</p><ul><li><strong>Kubernetes Secrets (built-in):</strong> base64-encoded, 1 MiB limit. Enable <strong>encryption at rest</strong> in the API server with a KMS provider to actually encrypt etcd values.</li><li><strong>Sealed Secrets:</strong> a controller that encrypts Secrets so they can be safely stored in Git; the cluster holds the only key to unseal them.</li><li><strong>External Secrets Operator (ESO):</strong> syncs secrets from external managers (Vault, AWS Secrets Manager, GCP Secret Manager) into Kubernetes Secrets.</li><li><strong>HashiCorp Vault:</strong> provides dynamic short-lived secrets, leasing, and fine-grained policies.</li><li><strong>Cloud secret managers:</strong> AWS Secrets Manager, Azure Key Vault, GCP Secret Manager — integrated with IAM and audit logging.</li><li><strong>RBAC:</strong> use Roles/RoleBindings to limit which service accounts or users can read a Secret.</li></ul><pre><code class=\"language-bash\"># Encode a secret\nkubectl create secret generic db-credentials \\\n  --from-literal=username=admin \\\n  --from-literal=password='S3cret!'\n\n# Reference in pod\nenvFrom:\n- secretRef: {name: db-credentials}</code></pre><p>Avoid checking Secrets into Git in plain form, enable encryption at rest, scope access with RBAC, and prefer short-lived or dynamic secrets where possible.</p>",
      "difficulty": "Advanced",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Kubernetes Secrets are base64-encoded by default, not encrypted at rest.",
        "Stronger options include Sealed Secrets, External Secrets Operator, and HashiCorp Vault.",
        "Always enable encryption at rest and apply least-privilege RBAC."
      ]
    },
    {
      "question": "What happens during a rolling deployment in Kubernetes?",
      "answer": "<p>A <strong>rolling deployment</strong> incrementally replaces old pods with new ones, keeping the application available throughout the rollout.</p><ol><li>You update the Deployment's pod template (e.g., new image tag).</li><li>Kubernetes creates a <strong>new ReplicaSet</strong> for the new version while keeping the old one.</li><li>Pods from the new ReplicaSet are scaled up incrementally based on <code>maxSurge</code> (extra pods above desired) and <code>maxUnavailable</code> (pods that can be down).</li><li>As new pods pass their <strong>readiness probes</strong>, old pods are terminated.</li><li>Once all old pods are gone, the old ReplicaSet is scaled to zero but kept for rollback history.</li></ol><pre><code class=\"language-yaml\">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 5\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  template:\n    spec:\n      containers:\n      - name: web\n        image: web:v2</code></pre><p>Use <code>kubectl rollout status</code> to monitor and <code>kubectl rollout undo</code> to roll back. If a new pod fails readiness, Kubernetes pauses the rollout so you can investigate without taking the service down.</p>",
      "difficulty": "Intermediate",
      "tags": ["DevOps", "Cloud", "Kubernetes"],
      "keyPoints": [
        "Rolling deployments create a new ReplicaSet and gradually shift pods to it.",
        "maxSurge and maxUnavailable control the pace of the rollout.",
        "Readiness gates and probes prevent traffic from reaching broken pods; rollback is simple via kubectl rollout undo."
      ]
    }
  ]
}
