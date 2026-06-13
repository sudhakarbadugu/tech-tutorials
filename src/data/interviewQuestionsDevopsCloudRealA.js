// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T19:20:17.656Z

export const devopsCloudRealQuestionsA = {
  "questions": [
  {
    "question": "How do you ensure high availability in AWS?",
    "answer": "<p><strong>High availability in AWS</strong> means designing systems that remain operational during failures by eliminating single points of failure.</p><h4>Key Strategies</h4><ul><li><strong>Multi-AZ deployments:</strong> Run resources across at least two Availability Zones for redundancy.</li><li><strong>Load balancing:</strong> Use ALB/NLB to distribute traffic across healthy instances.</li><li><strong>Auto Scaling:</strong> Automatically replace failed or overloaded EC2 instances.</li><li><strong>Managed services:</strong> Prefer RDS Multi-AZ, ElastiCache, DynamoDB global tables, and S3.</li></ul><h4>Example Services</h4><pre><code>EC2 Auto Scaling Group  → ALB → EC2 instances in multiple AZs\nRDS Multi-AZ            → standby replica for failover\nRoute 53 health checks  → failover routing to secondary region</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "High Availability"
    ],
    "keyPoints": [
      "Deploy across multiple Availability Zones to survive single-AZ failures.",
      "Use load balancers and Auto Scaling to distribute and recover traffic.",
      "Leverage managed AWS services with built-in redundancy like RDS Multi-AZ and S3."
    ]
  },
  {
    "question": "What is the difference between an AWS Security Group and an NACL?",
    "answer": "<p><strong>Security Groups</strong> and <strong>NACLs</strong> both control network traffic, but at different levels.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>Security Group</th><th style='padding:8px;border:1px solid #ddd;'>NACL</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Level</td><td style='padding:8px;border:1px solid #ddd;'>Instance (ENI)</td><td style='padding:8px;border:1px solid #ddd;'>Subnet</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Stateful</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>No</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Rules</td><td style='padding:8px;border:1px solid #ddd;'>Allow only</td><td style='padding:8px;border:1px solid #ddd;'>Allow and deny</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Default</td><td style='padding:8px;border:1px solid #ddd;'>Deny all inbound, allow all outbound</td><td style='padding:8px;border:1px solid #ddd;'>Allow all</td></tr></table><p>Use Security Groups for fine-grained instance-level control and NACLs for subnet-level guardrails.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Networking",
      "Security"
    ],
    "keyPoints": [
      "Security Groups are stateful and protect individual instances.",
      "NACLs are stateless and operate at the subnet level with allow/deny rules.",
      "Use both for defense-in-depth network security."
    ]
  },
  {
    "question": "How does AWS handle high availability and what services enable it?",
    "answer": "<p>AWS provides multiple services and patterns to achieve high availability across compute, storage, database, and networking layers.</p><h4>Compute</h4><ul><li><strong>EC2 Auto Scaling:</strong> maintains healthy instance counts across AZs.</li><li><strong>Elastic Load Balancing:</strong> routes traffic only to healthy targets.</li><li><strong>Lambda:</strong> serverless functions are automatically highly available.</li></ul><h4>Database & Storage</h4><ul><li><strong>RDS Multi-AZ:</strong> synchronous standby for automatic failover.</li><li><strong>DynamoDB:</strong> replicates data across three AZs by default.</li><li><strong>S3:</strong> 99.999999999% durability with cross-region replication option.</li></ul><h4>DNS & Recovery</h4><ul><li><strong>Route 53:</strong> health checks, failover, and latency-based routing.</li><li><strong>CloudFront:</strong> edge caching improves availability and performance.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "High Availability"
    ],
    "keyPoints": [
      "Use Auto Scaling and load balancing for resilient compute.",
      "Choose managed databases that replicate across AZs automatically.",
      "Use Route 53 and CloudFront for DNS failover and edge resilience."
    ]
  },
  {
    "question": "What are the different types of load balancers in AWS and when would you use each?",
    "answer": "<p>AWS offers three main Elastic Load Balancer types for different use cases.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Layer</th><th style='padding:8px;border:1px solid #ddd;'>Best For</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'><strong>ALB</strong></td><td style='padding:8px;border:1px solid #ddd;'>Layer 7 (HTTP/HTTPS)</td><td style='padding:8px;border:1px solid #ddd;'>Path/host-based routing, containers, microservices</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'><strong>NLB</strong></td><td style='padding:8px;border:1px solid #ddd;'>Layer 4 (TCP/UDP)</td><td style='padding:8px;border:1px solid #ddd;'>High throughput, low latency, static IPs</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'><strong>GWLB</strong></td><td style='padding:8px;border:1px solid #ddd;'>Layer 3/4</td><td style='padding:8px;border:1px solid #ddd;'>Inline virtual appliances (firewalls, IDS)</td></tr></table><p>The older <strong>Classic Load Balancer</strong> is mostly deprecated and should be migrated to ALB or NLB.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Load Balancing",
      "Networking"
    ],
    "keyPoints": [
      "ALB handles Layer 7 traffic with path and host routing.",
      "NLB handles Layer 4 traffic with high performance and static IPs.",
      "GWLB routes traffic through third-party virtual appliances."
    ]
  },
  {
    "question": "How does AWS Route 53 work and what routing policies does it support?",
    "answer": "<p><strong>Route 53</strong> is a scalable DNS and domain registration service that translates domain names into IP addresses.</p><h4>Routing Policies</h4><ul><li><strong>Simple:</strong> single resource per record.</li><li><strong>Weighted:</strong> split traffic by percentage for A/B testing.</li><li><strong>Latency-based:</strong> route users to the lowest-latency region.</li><li><strong>Failover:</strong> route to a standby when the primary fails health checks.</li><li><strong>Geolocation:</strong> route based on user location.</li><li><strong>Geoproximity:</strong> route based on resource location with bias.</li><li><strong>Multivalue answer:</strong> return multiple healthy records.</li></ul><h4>Other Features</h4><pre><code>Domain registration → Hosted zones → Health checks → Traffic policies\nAlias records point to AWS resources like CloudFront, S3, or ALB</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "DNS",
      "Networking"
    ],
    "keyPoints": [
      "Route 53 provides DNS resolution, domain registration, and health checks.",
      "Routing policies include weighted, latency-based, failover, and geolocation.",
      "Alias records can point directly to AWS services without charging for queries."
    ]
  },
  {
    "question": "What is Amazon RDS and how does it differ from DynamoDB?",
    "answer": "<p><strong>Amazon RDS</strong> is a managed relational database service, while <strong>DynamoDB</strong> is a fully managed NoSQL key-value and document store.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>RDS</th><th style='padding:8px;border:1px solid #ddd;'>DynamoDB</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Model</td><td style='padding:8px;border:1px solid #ddd;'>Relational (SQL)</td><td style='padding:8px;border:1px solid #ddd;'>Key-value / document (NoSQL)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Schema</td><td style='padding:8px;border:1px solid #ddd;'>Fixed schema</td><td style='padding:8px;border:1px solid #ddd;'>Schema-less</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Vertical + read replicas</td><td style='padding:8px;border:1px solid #ddd;'>Automatic horizontal scaling</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use case</td><td style='padding:8px;border:1px solid #ddd;'>Complex transactions, joins</td><td style='padding:8px;border:1px solid #ddd;'>High throughput, simple access patterns</td></tr></table><p>Choose RDS for ACID compliance and complex queries; choose DynamoDB for massive scale and predictable low latency.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Databases"
    ],
    "keyPoints": [
      "RDS is a managed SQL database supporting complex transactions and joins.",
      "DynamoDB is a serverless NoSQL store with automatic horizontal scaling.",
      "Pick RDS for relational workloads and DynamoDB for massive, simple key-value access."
    ]
  },
  {
    "question": "How do you optimize AWS costs for a company with variable workloads?",
    "answer": "<p>AWS cost optimization balances performance, availability, and spend across compute, storage, and data transfer.</p><h4>Tactics</h4><ul><li><strong>Right-sizing:</strong> match instance types and sizes to actual workload needs.</li><li><strong>Reserved Instances / Savings Plans:</strong> commit to consistent usage for discounts up to 72%.</li><li><strong>Spot Instances:</strong> use for fault-tolerant, interruptible workloads at up to 90% savings.</li><li><strong>Storage tiering:</strong> move infrequent data to S3 Glacier or Intelligent-Tiering.</li><li><strong>Auto Scaling:</strong> scale resources down during low demand.</li><li><strong>Monitor:</strong> use Cost Explorer, Budgets, and AWS Compute Optimizer.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Cost Optimization"
    ],
    "keyPoints": [
      "Right-size instances and use Auto Scaling to match demand.",
      "Purchase Reserved Instances or Savings Plans for predictable workloads.",
      "Use Spot Instances, storage tiering, and monitoring tools to reduce waste."
    ]
  },
  {
    "question": "What is the difference between AWS ECS and EKS?",
    "answer": "<p><strong>ECS</strong> and <strong>EKS</strong> are both AWS container orchestration services, but with different control planes.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>ECS</th><th style='padding:8px;border:1px solid #ddd;'>EKS</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Orchestrator</td><td style='padding:8px;border:1px solid #ddd;'>AWS-managed</td><td style='padding:8px;border:1px solid #ddd;'>Kubernetes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simpler</td><td style='padding:8px;border:1px solid #ddd;'>More complex, more flexible</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Portability</td><td style='padding:8px;border:1px solid #ddd;'>AWS-only</td><td style='padding:8px;border:1px solid #ddd;'>Multi-cloud</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Ecosystem</td><td style='padding:8px;border:1px solid #ddd;'>AWS integrations</td><td style='padding:8px;border:1px solid #ddd;'>Kubernetes ecosystem</td></tr></table><p>ECS is great for AWS-native teams; EKS suits teams needing Kubernetes portability and ecosystem.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Containers",
      "Kubernetes"
    ],
    "keyPoints": [
      "ECS uses AWS-managed orchestration and is simpler to operate.",
      "EKS runs upstream Kubernetes and offers multi-cloud portability.",
      "Choose ECS for AWS-native simplicity, EKS for Kubernetes features."
    ]
  },
  {
    "question": "How do you secure data in AWS? Explain encryption, IAM policies, Security Groups, and WAF.",
    "answer": "<p>AWS security uses multiple layers: identity, network, application, data, and monitoring.</p><h4>Layers</h4><ul><li><strong>IAM:</strong> enforce least-privilege access with roles, policies, and MFA.</li><li><strong>Encryption:</strong> use KMS for data at rest (EBS, S3, RDS) and TLS for data in transit.</li><li><strong>Network:</strong> Security Groups, NACLs, VPCs, and private subnets.</li><li><strong>WAF & Shield:</strong> protect web applications from DDoS and common exploits.</li><li><strong>Monitoring:</strong> CloudTrail for API auditing and GuardDuty for threat detection.</li></ul><pre><code>S3 bucket policies + KMS encryption + TLS in transit\nIAM roles for EC2 instead of long-term access keys\nAWS WAF rules + AWS Shield Advanced for DDoS protection</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Security",
      "IAM"
    ],
    "keyPoints": [
      "Enforce least-privilege access with IAM roles and policies.",
      "Encrypt data at rest with KMS and in transit with TLS.",
      "Protect networks and applications with Security Groups, NACLs, WAF, and Shield."
    ]
  },
  {
    "question": "Explain AWS CloudFormation and how it enables Infrastructure as Code.",
    "answer": "<p><strong>AWS CloudFormation</strong> is an Infrastructure as Code service that lets you model, provision, and manage AWS resources using templates.</p><h4>Key Concepts</h4><ul><li><strong>Templates:</strong> JSON or YAML files declaring resources and their dependencies.</li><li><strong>Stacks:</strong> collections of resources created and managed as a unit.</li><li><strong>Change sets:</strong> preview changes before applying them.</li><li><strong>Drift detection:</strong> identify manual changes outside CloudFormation.</li></ul><pre><code>Resources:\n  MyBucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      BucketName: my-cloudformation-bucket</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "IaC",
      "CloudFormation"
    ],
    "keyPoints": [
      "CloudFormation provisions AWS resources from declarative JSON/YAML templates.",
      "Stacks manage related resources as a single lifecycle unit.",
      "Change sets and drift detection help maintain template integrity."
    ]
  },
  {
    "question": "What is AWS Lambda and what are its limitations?",
    "answer": "<p><strong>AWS Lambda</strong> is a serverless compute service that runs code in response to events without managing servers.</p><h4>Common Limitations</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Limit</th><th style='padding:8px;border:1px solid #ddd;'>Value</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Timeout</td><td style='padding:8px;border:1px solid #ddd;'>15 minutes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Memory</td><td style='padding:8px;border:1px solid #ddd;'>128 MB – 10 GB</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deployment package</td><td style='padding:8px;border:1px solid #ddd;'>50 MB zipped, 250 MB unzipped</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Ephemeral storage</td><td style='padding:8px;border:1px solid #ddd;'>512 MB – 10 GB</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Concurrency</td><td style='padding:8px;border:1px solid #ddd;'>1,000 executions per region (adjustable)</td></tr></table><p>Lambda is ideal for event-driven, short-lived, bursty workloads but not for long-running or stateful processes.</p>",
    "difficulty": "Beginner",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Serverless",
      "Lambda"
    ],
    "keyPoints": [
      "Lambda runs event-driven code without server management.",
      "Limitations include 15-minute timeout and deployment package size limits.",
      "Best for short, bursty workloads rather than long-running processes."
    ]
  },
  {
    "question": "What is AWS Lambda cold start and how do you optimize it?",
    "answer": "<p>A <strong>cold start</strong> occurs when Lambda initializes a new execution environment, adding latency before the function runs.</p><h4>Causes</h4><ul><li>New function version or configuration change.</li><li>Scaling up requires more concurrent environments.</li><li>Idle function environments are reclaimed.</li></ul><h4>Optimization Techniques</h4><ul><li><strong>Provisioned Concurrency:</strong> keep environments warm.</li><li><strong>Smaller deployment packages:</strong> reduce initialization time.</li><li><strong>Initialize outside handler:</strong> reuse connections and clients.</li><li><strong>Memory allocation:</strong> more memory also provides more CPU.</li><li><strong>Choose appropriate runtime:</strong> compiled or faster runtimes reduce startup time.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Serverless",
      "Lambda",
      "Performance"
    ],
    "keyPoints": [
      "Cold starts happen when Lambda initializes a new execution environment.",
      "Use Provisioned Concurrency to keep functions warm.",
      "Initialize reusable resources outside the handler and minimize package size."
    ]
  },
  {
    "question": "How does AWS Lambda integrate with API Gateway for REST APIs?",
    "answer": "<p><strong>API Gateway</strong> exposes RESTful endpoints that invoke Lambda functions to handle requests.</p><h4>Integration Flow</h4><pre><code>Client → API Gateway → Lambda Function → Response\n           ↓                ↓\n      Authorization    Business logic / downstream calls</code></pre><h4>Setup Steps</h4><ul><li>Create a REST API or HTTP API in API Gateway.</li><li>Define resources and methods (GET, POST, etc.).</li><li>Set integration type to Lambda Function and choose the function.</li><li>Configure request/response mappings and permissions.</li></ul><h4>Benefits</h4><ul><li>Automatic scaling, throttling, and caching.</li><li>Built-in authentication via Cognito or IAM.</li><li>Pay-per-request pricing.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Serverless",
      "API Gateway"
    ],
    "keyPoints": [
      "API Gateway routes HTTP requests to Lambda functions.",
      "Configure methods, integrations, and permissions between the two services.",
      "Gain automatic scaling, throttling, and built-in security."
    ]
  },
  {
    "question": "What is the difference between CodeBuild and CodePipeline?",
    "answer": "<p><strong>CodeBuild</strong> is a fully managed continuous integration service that compiles, tests, and packages code. <strong>CodePipeline</strong> orchestrates the end-to-end release workflow.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Service</th><th style='padding:8px;border:1px solid #ddd;'>Purpose</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>CodeBuild</td><td style='padding:8px;border:1px solid #ddd;'>Build and test source code</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>CodePipeline</td><td style='padding:8px;border:1px solid #ddd;'>Orchestrate source, build, test, deploy stages</td></tr></table><p>A typical pipeline: Source (CodeCommit/GitHub) → Build (CodeBuild) → Deploy (CodeDeploy/ECS/EKS).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "CI/CD",
      "AWS Developer Tools"
    ],
    "keyPoints": [
      "CodeBuild compiles, tests, and packages code.",
      "CodePipeline orchestrates multi-stage release workflows.",
      "They are often combined into Source → Build → Deploy pipelines."
    ]
  },
  {
    "question": "How does AWS support microservices architecture?",
    "answer": "<p>AWS provides a broad set of managed services to build, deploy, and operate microservices.</p><h4>Compute</h4><ul><li><strong>ECS/EKS:</strong> container orchestration.</li><li><strong>Lambda:</strong> serverless functions.</li><li><strong>Fargate:</strong> serverless compute for containers.</li></ul><h4>Networking & API</h4><ul><li><strong>API Gateway:</strong> expose and manage APIs.</li><li><strong>App Mesh / VPC:</strong> service-to-service communication.</li></ul><h4>Data & Messaging</h4><ul><li><strong>SQS/SNS:</strong> asynchronous messaging.</li><li><strong>EventBridge:</strong> event-driven integration.</li><li><strong>DynamoDB/RDS:</strong> per-service data stores.</li></ul><h4>Observability</h4><ul><li><strong>CloudWatch, X-Ray:</strong> logging, metrics, and distributed tracing.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Microservices"
    ],
    "keyPoints": [
      "AWS supports microservices with ECS, EKS, Lambda, and Fargate.",
      "API Gateway, SQS, SNS, and EventBridge handle communication.",
      "CloudWatch and X-Ray provide observability."
    ]
  },
  {
    "question": "Can you increase the size of the root volume without shutting down the EC2 instance?",
    "answer": "<p>Yes, you can increase the size of an EBS root volume without shutting down the EC2 instance.</p><h4>Steps</h4><ol><li>Modify the EBS volume size in the EC2 console or via CLI.</li><li>Wait for the volume modification to complete.</li><li>Extend the file system from within the OS using tools like <code>resize2fs</code> or <code>growpart</code>.</li></ol><pre><code># AWS CLI example\naws ec2 modify-volume --volume-id vol-1234567890abcdef0 --size 50\n\n# Inside the instance (ext4)\nsudo growpart /dev/xvda 1\nsudo resize2fs /dev/xvda1</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "EBS",
      "EC2"
    ],
    "keyPoints": [
      "EBS volumes can be expanded without stopping the EC2 instance.",
      "Modify the volume size in AWS, then extend the partition inside the OS.",
      "Use growpart and resize2fs for Linux ext4 file systems."
    ]
  },
  {
    "question": "How do you configure VPC peering between two VPCs?",
    "answer": "<p><strong>VPC peering</strong> connects two VPCs so they can communicate privately using private IP addresses.</p><h4>Requirements</h4><ul><li>CIDR blocks must not overlap between the peered VPCs.</li><li>A peering connection must be created and accepted.</li><li>Route tables in each VPC must point to the peering connection for the remote CIDR.</li><li>Security Groups and NACLs must allow the traffic.</li></ul><pre><code>VPC A (10.0.0.0/16)  ←peering→  VPC B (172.16.0.0/16)\nRoute in VPC A: 172.16.0.0/16 → pcx-12345\nRoute in VPC B: 10.0.0.0/16   → pcx-12345</code></pre><p>VPC peering is not transitive; for many VPCs, use a Transit Gateway.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "VPC",
      "Networking"
    ],
    "keyPoints": [
      "VPC peering enables private connectivity between two VPCs.",
      "Non-overlapping CIDRs and route table updates are required.",
      "Use Transit Gateway for transitive, many-to-many connectivity."
    ]
  },
  {
    "question": "What is the difference between Classic ELB and Application ELB?",
    "answer": "<p><strong>Classic Load Balancer</strong> is the older generation, while <strong>Application Load Balancer</strong> operates at Layer 7 with advanced routing.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>Classic ELB</th><th style='padding:8px;border:1px solid #ddd;'>ALB</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Layer</td><td style='padding:8px;border:1px solid #ddd;'>Layer 4 / basic Layer 7</td><td style='padding:8px;border:1px solid #ddd;'>Layer 7</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Routing</td><td style='padding:8px;border:1px solid #ddd;'>Limited</td><td style='padding:8px;border:1px solid #ddd;'>Path, host, header, method</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Targets</td><td style='padding:8px;border:1px solid #ddd;'>EC2-Classic / EC2</td><td style='padding:8px;border:1px solid #ddd;'>EC2, Lambda, IP, containers</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>WebSockets</td><td style='padding:8px;border:1px solid #ddd;'>No</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td></tr></table><p>AWS recommends using ALB for new applications.</p>",
    "difficulty": "Beginner",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Load Balancing"
    ],
    "keyPoints": [
      "Classic ELB is older and less feature-rich.",
      "ALB operates at Layer 7 with path, host, and container-based routing.",
      "AWS recommends ALB for modern applications."
    ]
  },
  {
    "question": "How do you auto-scale Pods in EKS during high traffic?",
    "answer": "<p>Scaling pods in EKS during high traffic can be done with Horizontal Pod Autoscaler, Cluster Autoscaler, and vertical scaling.</p><h4>Approaches</h4><ul><li><strong>HPA:</strong> scales pod replicas based on CPU, memory, or custom metrics.</li><li><strong>VPA:</strong> adjusts pod CPU/memory requests.</li><li><strong>Cluster Autoscaler:</strong> adds or removes worker nodes.</li><li><strong>Karpenter:</strong> node provisioning with flexible instance types.</li></ul><pre><code>kubectl autoscale deployment web --min=2 --max=20 --cpu-percent=70\n\n# Cluster Autoscaler adds nodes when pods are unschedulable</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Kubernetes",
      "EKS",
      "Scaling"
    ],
    "keyPoints": [
      "Use HPA to scale pod replicas based on metrics.",
      "Use Cluster Autoscaler or Karpenter to scale worker nodes.",
      "Combine HPA and node autoscaling for end-to-end elasticity."
    ]
  },
  {
    "question": "How would you connect AWS Lambda with API Gateway for serverless deployment?",
    "answer": "<p>You connect API Gateway to Lambda by creating a Lambda integration for an API method.</p><h4>Steps</h4><ol><li>Create a Lambda function with an execution role.</li><li>Create a REST API or HTTP API in API Gateway.</li><li>Add a resource and method, then choose Lambda integration.</li><li>Grant API Gateway permission to invoke the Lambda function.</li><li>Deploy the API to a stage.</li></ol><pre><code>aws lambda add-permission   --function-name myFunction   --statement-id apigateway   --action lambda:InvokeFunction   --principal apigateway.amazonaws.com</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Serverless",
      "API Gateway"
    ],
    "keyPoints": [
      "Create the Lambda function and API Gateway API.",
      "Configure a Lambda integration and grant invoke permissions.",
      "Deploy the API to a stage to expose the endpoint."
    ]
  },
  {
    "question": "Explain how you would migrate a high-traffic web app from normal server setup to AWS with zero downtime.",
    "answer": "<p>A zero-downtime migration to AWS typically uses a blue-green or canary cutover with DNS and load balancer switching.</p><h4>Approach</h4><ol><li><strong>Replicate environment:</strong> build the AWS target environment (VPC, ALB, EC2/ECS/EKS, RDS).</li><li><strong>Sync data:</strong> use AWS DMS or replication to keep databases in sync.</li><li><strong>Test thoroughly:</strong> validate functionality, performance, and security in AWS.</li><li><strong>DNS cutover:</strong> lower TTL and shift Route 53 records to AWS ALB/CloudFront.</li><li><strong>Rollback plan:</strong> keep the old environment running until migration is verified.</li></ol>",
    "difficulty": "Advanced",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Migration",
      "High Availability"
    ],
    "keyPoints": [
      "Build and test the AWS environment before cutover.",
      "Keep data in sync with AWS DMS or database replication.",
      "Use Route 53 with low TTL for fast, reversible DNS cutover."
    ]
  },
  {
    "question": "What is AWS Direct Connect and how does it work?",
    "answer": "<p><strong>AWS Direct Connect</strong> provides a dedicated private network connection from your data center or office to AWS.</p><h4>Benefits</h4><ul><li>Consistent, lower-latency connectivity compared to internet VPN.</li><li>Reduced data transfer costs for high volumes.</li><li>Private access to VPC resources and public access to AWS services.</li></ul><h4>Components</h4><ul><li><strong>Connection:</strong> physical port at an AWS Direct Connect location.</li><li><strong>Virtual Interface:</strong> private VIF for VPC, public VIF for AWS services.</li><li><strong>Direct Connect Gateway:</strong> connect multiple VPCs across regions.</li></ul>",
    "difficulty": "Advanced",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Networking",
      "Direct Connect"
    ],
    "keyPoints": [
      "Direct Connect is a dedicated private link to AWS.",
      "It offers lower latency, more consistency, and cost savings over VPN for high bandwidth.",
      "Use VIFs and Direct Connect Gateway for VPC and multi-region access."
    ]
  },
  {
    "question": "How do you use AWS CloudWatch for monitoring and what are the key metrics?",
    "answer": "<p><strong>Amazon CloudWatch</strong> collects and tracks metrics, logs, and events from AWS resources and applications.</p><h4>Key Metrics</h4><ul><li><strong>EC2:</strong> CPU utilization, network in/out, disk I/O, status checks.</li><li><strong>ALB:</strong> request count, latency, 4xx/5xx errors, target health.</li><li><strong>Lambda:</strong> invocations, duration, errors, throttles.</li><li><strong>RDS:</strong> CPU, connections, read/write latency, free storage.</li></ul><h4>Features</h4><ul><li><strong>Alarms:</strong> trigger actions based on metric thresholds.</li><li><strong>Logs Insights:</strong> query and analyze log data.</li><li><strong>Dashboards:</strong> visualize metrics.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "AWS",
      "DevOps",
      "Cloud",
      "Monitoring",
      "CloudWatch"
    ],
    "keyPoints": [
      "CloudWatch collects metrics, logs, and events across AWS.",
      "Key metrics vary by service: EC2 CPU, ALB latency, Lambda errors.",
      "Use alarms, dashboards, and Logs Insights for monitoring."
    ]
  },
  {
    "question": "What is the difference between a Docker image and a Docker container?",
    "answer": "<p>A <strong>Docker image</strong> is a read-only template with application code, dependencies, and configuration. A <strong>container</strong> is a runnable instance of an image.</p><h4>Analogy</h4><p>Image is like a class; container is like an object.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Image</th><th style='padding:8px;border:1px solid #ddd;'>Container</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Read-only</td><td style='padding:8px;border:1px solid #ddd;'>Writable layer</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Template</td><td style='padding:8px;border:1px solid #ddd;'>Runtime instance</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Stored in registry</td><td style='padding:8px;border:1px solid #ddd;'>Runs on host</td></tr></table>",
    "difficulty": "Beginner",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Containers"
    ],
    "keyPoints": [
      "A Docker image is a read-only template with code and dependencies.",
      "A container is a running instance of an image with a writable layer.",
      "Images are stored in registries; containers run on hosts."
    ]
  },
  {
    "question": "How would you approach optimizing a Dockerfile for smaller image size and faster build times?",
    "answer": "<p>Optimizing a Dockerfile reduces image size, build time, and attack surface.</p><h4>Best Practices</h4><ul><li><strong>Multi-stage builds:</strong> separate build and runtime stages.</li><li><strong>Small base images:</strong> use alpine or distroless images.</li><li><strong>Layer ordering:</strong> copy dependency files first to maximize cache hits.</li><li><strong>.dockerignore:</strong> exclude files not needed in the build context.</li><li><strong>Combine RUN commands:</strong> reduce layer count and cleanup in one step.</li></ul><pre><code>FROM node:18-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Dockerfile",
      "Performance"
    ],
    "keyPoints": [
      "Use multi-stage builds to keep production images small.",
      "Order instructions so frequently changed layers come last.",
      "Use .dockerignore and small base images to reduce size."
    ]
  },
  {
    "question": "Describe a situation where you had to troubleshoot a complex networking issue between Docker containers.",
    "answer": "<p>Troubleshooting Docker networking requires understanding the network type, DNS, firewall rules, and container connectivity.</p><h4>Checklist</h4><ol><li>Identify the network driver: bridge, host, overlay, or none.</li><li>Inspect the network and connected containers with <code>docker network inspect</code>.</li><li>Verify DNS resolution and <code>/etc/hosts</code> entries.</li><li>Check Security Groups, NACLs, and host firewall rules.</li><li>Use <code>docker exec</code> to run ping, curl, nslookup from inside the container.</li></ol><pre><code>docker network inspect my-network\ndocker exec -it container-name ping target\ndocker exec -it container-name nslookup target</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Networking",
      "Troubleshooting"
    ],
    "keyPoints": [
      "Inspect Docker networks and attached containers.",
      "Verify DNS, firewall rules, and security group settings.",
      "Run network diagnostic tools from inside the container."
    ]
  },
  {
    "question": "What are the benefits and challenges of using Docker in a microservices environment?",
    "answer": "<p>Docker simplifies microservices deployments but introduces operational complexity.</p><h4>Benefits</h4><ul><li><strong>Consistency:</strong> same image runs in dev, test, and production.</li><li><strong>Isolation:</strong> dependencies and runtime are encapsulated.</li><li><strong>Portability:</strong> images run anywhere Docker is installed.</li><li><strong>Efficiency:</strong> shares the host kernel, lighter than VMs.</li></ul><h4>Challenges</h4><ul><li><strong>Networking:</strong> service discovery and inter-container communication.</li><li><strong>Storage:</strong> stateful workloads need volumes and backup strategies.</li><li><strong>Security:</strong> image vulnerabilities and runtime privileges.</li><li><strong>Orchestration:</strong> managing many containers requires Kubernetes or Swarm.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Microservices"
    ],
    "keyPoints": [
      "Docker provides consistency, isolation, and portability for microservices.",
      "Challenges include networking, storage, security, and orchestration.",
      "Use orchestrators and security scanning for production use."
    ]
  },
  {
    "question": "Explain your experience with multi-stage builds in Dockerfiles. What are the benefits?",
    "answer": "<p><strong>Multi-stage builds</strong> use multiple <code>FROM</code> instructions in a Dockerfile to create smaller, focused images.</p><h4>Benefits</h4><ul><li><strong>Smaller images:</strong> only runtime artifacts are included.</li><li><strong>Faster deployments:</strong> less data to push and pull.</li><li><strong>Improved security:</strong> build tools and source code are left out.</li><li><strong>Cleaner pipelines:</strong> separate build, test, and production stages.</li></ul><pre><code>FROM node:18-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Dockerfile"
    ],
    "keyPoints": [
      "Multi-stage builds use multiple FROM statements in one Dockerfile.",
      "They produce smaller, more secure production images.",
      "Build tools and source are excluded from the final image."
    ]
  },
  {
    "question": "How do you handle persistent data in Docker containers and what are the different volume options?",
    "answer": "<p>Docker provides several storage options for persistent data.</p><h4>Options</h4><ul><li><strong>Named volumes:</strong> managed by Docker, preferred for production.</li><li><strong>Bind mounts:</strong> map host directories into containers, useful for development.</li><li><strong>tmpfs mounts:</strong> stored in memory, not persistent.</li></ul><h4>Commands</h4><pre><code># Named volume\ndocker volume create my-vol\ndocker run -v my-vol:/data myapp\n\n# Bind mount\ndocker run -v /host/path:/container/path myapp\n\n# tmpfs mount\ndocker run --tmpfs /cache:rw,noexec,nosuid,size=100m myapp</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Storage"
    ],
    "keyPoints": [
      "Named volumes are managed by Docker and ideal for production.",
      "Bind mounts expose host paths and are common in development.",
      "tmpfs mounts provide fast, non-persistent memory storage."
    ]
  },
  {
    "question": "What is the difference between Docker volumes, bind mounts, and tmpfs mounts?",
    "answer": "<p>Docker offers three ways to persist or share data between host and container.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Managed</th><th style='padding:8px;border:1px solid #ddd;'>Persistence</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Volume</td><td style='padding:8px;border:1px solid #ddd;'>Docker</td><td style='padding:8px;border:1px solid #ddd;'>Persistent</td><td style='padding:8px;border:1px solid #ddd;'>Production data</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Bind mount</td><td style='padding:8px;border:1px solid #ddd;'>Host</td><td style='padding:8px;border:1px solid #ddd;'>Persistent</td><td style='padding:8px;border:1px solid #ddd;'>Development</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>tmpfs</td><td style='padding:8px;border:1px solid #ddd;'>Memory</td><td style='padding:8px;border:1px solid #ddd;'>Non-persistent</td><td style='padding:8px;border:1px solid #ddd;'>Sensitive/cache</td></tr></table><p>Volumes are the recommended approach for most production workloads.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Storage"
    ],
    "keyPoints": [
      "Volumes are Docker-managed and best for production persistence.",
      "Bind mounts expose host paths and are useful for development.",
      "tmpfs mounts are memory-only and not persisted."
    ]
  },
  {
    "question": "What are the different types of Docker networks and when would you use each?",
    "answer": "<p>Docker provides several network drivers for different communication needs.</p><h4>Network Types</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Driver</th><th style='padding:8px;border:1px solid #ddd;'>Description</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>bridge</td><td style='padding:8px;border:1px solid #ddd;'>Default private network</td><td style='padding:8px;border:1px solid #ddd;'>Standalone containers</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>host</td><td style='padding:8px;border:1px solid #ddd;'>Shares host network stack</td><td style='padding:8px;border:1px solid #ddd;'>Performance needs</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>none</td><td style='padding:8px;border:1px solid #ddd;'>No network</td><td style='padding:8px;border:1px solid #ddd;'>Isolated containers</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>overlay</td><td style='padding:8px;border:1px solid #ddd;'>Multi-host networking</td><td style='padding:8px;border:1px solid #ddd;'>Swarm clusters</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>macvlan</td><td style='padding:8px;border:1px solid #ddd;'>MAC address assignment</td><td style='padding:8px;border:1px solid #ddd;'>Legacy apps</td></tr></table>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Networking"
    ],
    "keyPoints": [
      "Bridge is the default private network for standalone containers.",
      "Overlay enables multi-host networking in Swarm.",
      "Host and macvlan are used for specialized performance or legacy needs."
    ]
  },
  {
    "question": "What is the difference between ENTRYPOINT and CMD in Docker?",
    "answer": "<p>Both <code>ENTRYPOINT</code> and <code>CMD</code> define what runs when a container starts, but they behave differently.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Instruction</th><th style='padding:8px;border:1px solid #ddd;'>Purpose</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ENTRYPOINT</td><td style='padding:8px;border:1px solid #ddd;'>Main executable; hard to override</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>CMD</td><td style='padding:8px;border:1px solid #ddd;'>Default arguments for ENTRYPOINT</td></tr></table><pre><code>ENTRYPOINT [\"python\", \"app.py\"]\nCMD [\"--port\", \"8080\"]\n\n# Runs: python app.py --port 8080</code></pre><p>Use <code>ENTRYPOINT</code> for fixed behavior and <code>CMD</code> for defaults that can be overridden.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Dockerfile"
    ],
    "keyPoints": [
      "ENTRYPOINT defines the main executable that is hard to override.",
      "CMD provides default arguments to ENTRYPOINT.",
      "Use both together for flexible but consistent container startup."
    ]
  },
  {
    "question": "Write a Dockerfile for a Node.js application using NPM as the package manager on port 3000.",
    "answer": "<p>A typical Dockerfile for a Node.js application on port 3000:</p><pre><code>FROM node:18-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 3000\n\nUSER node\n\nCMD [\"node\", \"server.js\"]</code></pre><h4>Improvements</h4><ul><li>Use multi-stage builds to separate build and runtime.</li><li>Run as a non-root user for security.</li><li>Add a <code>.dockerignore</code> file to exclude <code>node_modules</code> and <code>.git</code>.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Dockerfile",
      "Node.js"
    ],
    "keyPoints": [
      "Use a minimal base image and install only production dependencies.",
      "Expose the application port and run as a non-root user.",
      "Consider multi-stage builds for smaller, more secure images."
    ]
  },
  {
    "question": "How do you troubleshoot Docker container connectivity issues?",
    "answer": "<p>To troubleshoot container connectivity, inspect network configuration, DNS, and firewall rules.</p><h4>Steps</h4><ol><li>Check the container network with <code>docker inspect</code>.</li><li>Verify the container is attached to the correct network.</li><li>Test DNS resolution and reachability with ping, curl, or nslookup.</li><li>Check if ports are exposed and published correctly.</li><li>Review host firewall, Security Groups, and NACLs for cloud deployments.</li></ol><pre><code>docker network ls\ndocker inspect container-name --format '{{json .NetworkSettings.Networks}}'\ndocker exec -it container-name sh -c \"ping -c 3 target\"</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Networking",
      "Troubleshooting"
    ],
    "keyPoints": [
      "Inspect the container network and attached networks.",
      "Test DNS and connectivity from inside the container.",
      "Check port mappings and external firewall rules."
    ]
  },
  {
    "question": "What happens to a Docker volume when the container is removed?",
    "answer": "<p>Named volumes and bind mounts persist after the container is removed, while anonymous volumes may be deleted depending on how the container is removed.</p><h4>Behavior</h4><ul><li><strong>Named volume:</strong> remains on the host and can be reused.</li><li><strong>Bind mount:</strong> host directory is unaffected.</li><li><strong>Anonymous volume:</strong> persists until explicitly removed or pruned.</li></ul><pre><code># Remove container but keep volume\ndocker rm container-name\n\n# Remove container and its anonymous volume\ndocker rm -v container-name\n\n# Remove all unused volumes\ndocker volume prune</code></pre>",
    "difficulty": "Beginner",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Storage"
    ],
    "keyPoints": [
      "Named and bind-mounted volumes persist after container removal.",
      "Anonymous volumes persist until pruned or removed explicitly.",
      "Use docker volume prune with caution to avoid data loss."
    ]
  },
  {
    "question": "What is Docker Compose and how does it simplify managing multi-container applications?",
    "answer": "<p><strong>Docker Compose</strong> defines and runs multi-container applications using a YAML file.</p><h4>Benefits</h4><ul><li>Describes services, networks, and volumes in one file.</li><li>Simplifies local development environment setup.</li><li>Provides consistent commands to start, stop, and scale services.</li></ul><pre><code>version: '3.8'\nservices:\n  web:\n    build: ./web\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: example\n    volumes:\n      - db-data:/var/lib/postgresql/data\nvolumes:\n  db-data:</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Docker Compose"
    ],
    "keyPoints": [
      "Docker Compose describes multi-container apps in YAML.",
      "It simplifies starting, stopping, and linking services.",
      "Compose files define services, networks, and volumes together."
    ]
  },
  {
    "question": "What is the difference between Docker Swarm and Kubernetes for container orchestration?",
    "answer": "<p>Both Docker Swarm and Kubernetes orchestrate containers, but differ in complexity and features.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>Docker Swarm</th><th style='padding:8px;border:1px solid #ddd;'>Kubernetes</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Low</td><td style='padding:8px;border:1px solid #ddd;'>High</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scalability</td><td style='padding:8px;border:1px solid #ddd;'>Moderate</td><td style='padding:8px;border:1px solid #ddd;'>Massive</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Ecosystem</td><td style='padding:8px;border:1px solid #ddd;'>Smaller</td><td style='padding:8px;border:1px solid #ddd;'>Large (CNCF)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Auto-scaling</td><td style='padding:8px;border:1px solid #ddd;'>Basic</td><td style='padding:8px;border:1px solid #ddd;'>Advanced (HPA, VPA)</td></tr></table><p>Swarm is simpler for small teams; Kubernetes is the industry standard for large-scale deployments.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Kubernetes",
      "Orchestration"
    ],
    "keyPoints": [
      "Docker Swarm is simpler and easier to set up.",
      "Kubernetes offers greater scalability, ecosystem, and control.",
      "Choose Swarm for simplicity, Kubernetes for complex production needs."
    ]
  },
  {
    "question": "How do you handle resource constraints like CPU and memory limits in Docker containers?",
    "answer": "<p>Docker lets you limit CPU and memory usage to prevent a container from consuming all host resources.</p><h4>Flags</h4><pre><code># Memory limit\ndocker run -m 512m --memory-swap 512m myapp\n\n# CPU limit\ndocker run --cpus=1.5 myapp\n\n# CPU shares (relative weight)\ndocker run --cpu-shares=512 myapp</code></pre><h4>In Compose</h4><pre><code>services:\n  web:\n    image: myapp\n    deploy:\n      resources:\n        limits:\n          cpus: '1.5'\n          memory: 512M\n        reservations:\n          cpus: '0.5'\n          memory: 128M</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Performance"
    ],
    "keyPoints": [
      "Use -m and --memory-swap to limit memory.",
      "Use --cpus to limit CPU cores.",
      "Compose deploy.resources lets you set limits and reservations."
    ]
  },
  {
    "question": "How would you implement a blue-green deployment strategy using Docker containers?",
    "answer": "<p><strong>Blue-green deployment</strong> runs two identical environments and switches traffic from the old (blue) to the new (green) version.</p><h4>Steps</h4><ol><li>Run the current blue environment serving live traffic.</li><li>Deploy the new green environment with the updated version.</li><li>Run tests and health checks against green.</li><li>Switch traffic from blue to green using a load balancer or proxy.</li><li>Keep blue running for instant rollback.</li></ol><pre><code>Load Balancer\n   ├── Blue (current)\n   └── Green (new)  ← switch traffic after validation</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Deployment",
      "Blue-Green"
    ],
    "keyPoints": [
      "Blue-green keeps two identical environments running.",
      "Validate green before switching traffic from blue.",
      "Instant rollback is possible by switching traffic back."
    ]
  },
  {
    "question": "What is the difference between a Dockerfile and Docker Compose?",
    "answer": "<p><strong>Docker Compose</strong> defines and runs multi-container applications using a YAML file.</p><h4>Benefits</h4><ul><li>Describes services, networks, and volumes in one file.</li><li>Simplifies local development environment setup.</li><li>Provides consistent commands to start, stop, and scale services.</li></ul><pre><code>version: '3.8'\nservices:\n  web:\n    build: ./web\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: example\n    volumes:\n      - db-data:/var/lib/postgresql/data\nvolumes:\n  db-data:</code></pre>",
    "difficulty": "Beginner",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Docker Compose"
    ],
    "keyPoints": [
      "Docker Compose describes multi-container apps in YAML.",
      "It simplifies starting, stopping, and linking services.",
      "Compose files define services, networks, and volumes together."
    ]
  },
  {
    "question": "How does container isolation work in Docker? What role do namespaces and cgroups play?",
    "answer": "<p>Docker uses Linux kernel features to isolate containers.</p><h4>Namespaces</h4><ul><li><strong>PID:</strong> process isolation</li><li><strong>NET:</strong> network isolation</li><li><strong>MNT:</strong> filesystem mount isolation</li><li><strong>UTS:</strong> hostname isolation</li><li><strong>IPC:</strong> inter-process communication isolation</li><li><strong>USER:</strong> user ID isolation</li></ul><h4>cgroups</h4><p>Control groups limit and account for resource usage such as CPU, memory, disk I/O, and network.</p><pre><code>Namespaces → isolate what a container can see\ncgroups   → limit what a container can use</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "Docker",
      "DevOps",
      "Cloud",
      "Linux",
      "Containers"
    ],
    "keyPoints": [
      "Namespaces isolate processes, network, mounts, and other resources.",
      "cgroups limit CPU, memory, and I/O usage.",
      "Together they provide lightweight OS-level isolation."
    ]
  },
  {
    "question": "How do you resolve merge conflicts in Git?",
    "answer": "<p>Merge conflicts occur when Git cannot automatically reconcile changes in the same file.</p><h4>Resolution Steps</h4><ol><li>Run <code>git status</code> to identify conflicted files.</li><li>Open the files and look for conflict markers <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li><li>Edit the file to keep the desired changes.</li><li>Stage the resolved file with <code>git add</code>.</li><li>Complete the merge with <code>git commit</code>.</li></ol><pre><code>git status\n# resolve conflict markers\ngit add file.txt\ngit commit -m \"Resolve merge conflict\"</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Identify conflicted files with git status.",
      "Manually resolve conflict markers and choose the correct changes.",
      "Stage and commit the resolved files."
    ]
  },
  {
    "question": "What is the difference between git rebase and git merge?",
    "answer": "<p>Both integrate changes from one branch into another, but they produce different histories.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Merge</th><th style='padding:8px;border:1px solid #ddd;'>Rebase</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Preserves branch history</td><td style='padding:8px;border:1px solid #ddd;'>Rewrites linear history</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Creates a merge commit</td><td style='padding:8px;border:1px solid #ddd;'>No extra merge commit</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Safe for shared branches</td><td style='padding:8px;border:1px solid #ddd;'>Avoid on shared branches</td></tr></table><p>Use <code>merge</code> for shared/public branches and <code>rebase</code> to clean up local feature branches.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Merge preserves branch history and creates a merge commit.",
      "Rebase rewrites commits onto the target branch for linear history.",
      "Avoid rebasing commits that have been pushed to shared branches."
    ]
  },
  {
    "question": "How do you revert a specific commit without deleting commit history?",
    "answer": "<p>Use <code>git revert</code> to undo a commit by creating a new commit that reverses its changes.</p><h4>Steps</h4><pre><code># Revert a specific commit by hash\ngit revert abc1234\n\n# Revert without opening editor\ngit revert --no-edit abc1234\n\n# Revert a merge commit\ngit revert -m 1 abc1234</code></pre><p>Unlike <code>git reset</code>, revert preserves history and is safe for shared branches.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "git revert creates a new commit that undoes a previous commit.",
      "It preserves history and is safe for shared branches.",
      "Use git reset only for local, unshared commits."
    ]
  },
  {
    "question": "What does git cherry-pick do and when would you use it?",
    "answer": "<p><strong>git cherry-pick</strong> applies the changes from a specific commit onto the current branch.</p><h4>Use Cases</h4><ul><li>Apply a hotfix from main to a release branch.</li><li>Port a bug fix without merging an entire branch.</li><li>Recover a commit accidentally lost.</li></ul><pre><code>git checkout release-branch\ngit cherry-pick abc1234\n\n# Cherry-pick a range\ngit cherry-pick abc1234..def5678</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "cherry-pick applies a single commit to the current branch.",
      "Useful for backporting hotfixes without full branch merges.",
      "May cause conflicts if the branches diverge significantly."
    ]
  },
  {
    "question": "What is Git stash and when would you use it?",
    "answer": "<p><strong>git stash</strong> temporarily saves uncommitted changes so you can switch branches or pull updates.</p><h4>Common Commands</h4><pre><code>git stash                 # stash current changes\ngit stash list            # list stashes\ngit stash apply           # apply most recent stash\ngit stash pop             # apply and remove most recent stash\ngit stash drop stash@{0}  # delete a stash</code></pre><h4>When to Use</h4><ul><li>Quickly switching to another branch without committing work in progress.</li><li>Pulling latest changes when you have local modifications.</li></ul>",
    "difficulty": "Beginner",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "git stash saves uncommitted changes temporarily.",
      "Use apply to restore without deleting, pop to restore and remove.",
      "List and manage multiple stashes with git stash list."
    ]
  },
  {
    "question": "How do you squash multiple commits into one?",
    "answer": "<p>Squashing combines multiple commits into one for a cleaner history.</p><h4>Methods</h4><pre><code># Interactive rebase last 3 commits\ngit rebase -i HEAD~3\n# mark commits as squash or fixup\n\n# Squash during merge\ngit merge --squash feature-branch\ngit commit -m \"Add feature\"</code></pre><p>Use <code>fixup</code> to discard a commit message and <code>squash</code> to combine messages.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Use interactive rebase to squash commits before merging.",
      "fixup discards the squashed commit message.",
      "squash combines multiple commit messages into one."
    ]
  },
  {
    "question": "What is a detached HEAD state in Git and how might you end up in it?",
    "answer": "<p>A <strong>detached HEAD</strong> state means HEAD points directly to a commit instead of a branch.</p><h4>Common Causes</h4><ul><li>Checking out a specific commit hash.</li><li>Checking out a remote branch without tracking.</li><li>Checking out a tag.</li></ul><h4>How to Fix</h4><pre><code># Create a branch from detached HEAD\ngit checkout -b new-branch\n\n# Or return to an existing branch\ngit checkout main</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Detached HEAD occurs when HEAD points to a commit, not a branch.",
      "It commonly happens when checking out a commit hash or tag.",
      "Create a new branch to preserve work made in detached HEAD."
    ]
  },
  {
    "question": "What is the difference between git fetch and git pull?",
    "answer": "<p>Both download changes from a remote, but they differ in how they affect your local branch.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>git fetch</th><th style='padding:8px;border:1px solid #ddd;'>git pull</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Downloads remote changes</td><td style='padding:8px;border:1px solid #ddd;'>Downloads and merges remote changes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Does not modify local branch</td><td style='padding:8px;border:1px solid #ddd;'>Merges into current branch</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Safe to review first</td><td style='padding:8px;border:1px solid #ddd;'>Can cause merge conflicts</td></tr></table><p><code>git pull</code> is equivalent to <code>git fetch</code> followed by <code>git merge</code>.</p>",
    "difficulty": "Beginner",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "git fetch downloads remote changes without modifying your branch.",
      "git pull fetches and merges changes into the current branch.",
      "Use fetch first to review changes before merging."
    ]
  },
  {
    "question": "How would you handle a situation where you accidentally committed sensitive information to a public repository?",
    "answer": "<p>If sensitive data is committed to a public repository, you must remove it from history, not just delete the file.</p><h4>Steps</h4><ol><li>Rotate the exposed credentials immediately.</li><li>Use <code>git filter-repo</code> or BFG Repo-Cleaner to remove the file from history.</li><li>Force push the rewritten history.</li><li>Notify users to rebase their branches onto the new history.</li></ol><pre><code>git filter-repo --path secret.txt --invert-paths\ngit push --force origin main</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "Git",
      "DevOps",
      "Cloud",
      "Security"
    ],
    "keyPoints": [
      "Rotate exposed credentials immediately.",
      "Rewrite history to remove the sensitive file completely.",
      "Force push and notify collaborators to rebase."
    ]
  },
  {
    "question": "Can you describe a situation where you encountered a complex merge conflict and how you resolved it?",
    "answer": "<p>For complex merge conflicts, coordinate with the other contributor and use a structured approach.</p><h4>Approach</h4><ol><li>Understand the intent of each branch's changes by reviewing commits.</li><li>Use a merge tool or IDE diff view to compare versions.</li><li>Communicate with the author of the conflicting changes when unclear.</li><li>Resolve, test the combined behavior, then commit.</li></ol><h4>Prevention</h4><ul><li>Keep branches short-lived.</li><li>Rebase frequently against main.</li><li>Break large refactors into smaller, coordinated changes.</li></ul>",
    "difficulty": "Advanced",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Understand each branch's intent before resolving.",
      "Use merge tools and communicate with other contributors.",
      "Test the merged result thoroughly."
    ]
  },
  {
    "question": "How would you use Git to implement a hotfix for a critical bug in production while a major feature is still in development?",
    "answer": "<p>Use a dedicated hotfix branch created from the production branch while development continues on main.</p><h4>Workflow</h4><pre><code>git checkout -b hotfix/bug main\n# fix and commit\ngit checkout main\ngit merge hotfix/bug\n\ngit checkout develop\ngit merge hotfix/bug\n\n# tag release\ngit tag v1.0.1</code></pre><p>This is similar to Git Flow: hotfixes are merged into both main and develop/feature branches.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud",
      "Git Flow"
    ],
    "keyPoints": [
      "Create hotfix branches from the production branch.",
      "Merge the fix into both main and active development branches.",
      "Tag the release after deploying the hotfix."
    ]
  },
  {
    "question": "What is the difference between git reset and git revert?",
    "answer": "<p>Both undo changes but have very different effects on history.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>git reset</th><th style='padding:8px;border:1px solid #ddd;'>git revert</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Moves branch pointer</td><td style='padding:8px;border:1px solid #ddd;'>Creates a new inverse commit</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Rewrites history</td><td style='padding:8px;border:1px solid #ddd;'>Preserves history</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Risky on shared branches</td><td style='padding:8px;border:1px solid #ddd;'>Safe for shared branches</td></tr></table><p>Prefer <code>revert</code> for public branches; use <code>reset</code> only for local cleanup.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "git reset rewrites history by moving the branch pointer.",
      "git revert creates a new commit that undoes changes safely.",
      "Use revert on shared branches; reset only locally."
    ]
  },
  {
    "question": "How do you keep a feature branch up-to-date with the main branch?",
    "answer": "<p>Keep a feature branch current by regularly integrating changes from main.</p><h4>Options</h4><ul><li><strong>Merge main into feature:</strong> preserves exact history, simple and safe.</li><li><strong>Rebase feature onto main:</strong> linear history; rewrite only local commits.</li></ul><pre><code># Merge approach\ngit checkout feature\ngit merge main\n\n# Rebase approach\ngit checkout feature\ngit rebase main</code></pre><p>Resolve conflicts promptly to avoid large merge conflicts later.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Merge main into the feature branch for safe history preservation.",
      "Rebase feature onto main for a linear history.",
      "Resolve conflicts early to keep integration manageable."
    ]
  },
  {
    "question": "What is Git LFS and when would you use it?",
    "answer": "<p><strong>Git LFS</strong> replaces large files in a repository with pointers and stores the actual content on a remote server.</p><h4>Use Cases</h4><ul><li>Binary assets like images, videos, or datasets.</li><li>Large files that would bloat the Git history.</li></ul><pre><code>git lfs install\ngit lfs track \"*.psd\"\ngit add .gitattributes\ngit add file.psd\ngit commit -m \"Add large file via LFS\"</code></pre>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Git LFS stores large files outside the Git repository.",
      "It replaces large files with small pointer files in history.",
      "Use it for binary assets to keep repositories small."
    ]
  },
  {
    "question": "How to overcome conflicts in Git when multiple developers change the same file?",
    "answer": "<p>Conflicts from concurrent edits are resolved by communication, small branches, and consistent integration practices.</p><h4>Practices</h4><ul><li>Pull or rebase frequently from the shared branch.</li><li>Coordinate with teammates before touching the same files.</li><li>Break large changes into smaller, focused commits.</li><li>Use feature flags to avoid long-lived branches.</li></ul><h4>Resolution</h4><p>When conflicts occur, use <code>git status</code>, resolve markers, test, then stage and commit.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Pull or rebase frequently to detect conflicts early.",
      "Communicate with teammates about file ownership.",
      "Resolve conflicts, test, then commit."
    ]
  },
  {
    "question": "If a file is suddenly deleted in Git, how do you recover it?",
    "answer": "<p>If a file was tracked by Git and deleted, you can restore it from history.</p><h4>Commands</h4><pre><code># Restore from HEAD\ngit restore deleted-file.txt\n\n# If deletion is already staged\ngit restore --staged deleted-file.txt\ngit restore deleted-file.txt\n\n# Restore from a specific commit\ngit checkout abc1234 -- deleted-file.txt</code></pre>",
    "difficulty": "Beginner",
    "tags": [
      "Git",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Use git restore to recover a deleted file from HEAD.",
      "Unstage the deletion first if it has been staged.",
      "Use git checkout with a commit hash to restore an older version."
    ]
  },
  {
    "question": "How would you rate yourself in GitLab CI/CD out of 10?",
    "answer": "<p>When rating GitLab CI/CD experience, be honest and back up the rating with concrete examples.</p><h4>Example Answer</h4><p>\"I would rate myself a 7 out of 10. I have built multi-stage pipelines with build, test, and deploy jobs, used runners, managed secrets with CI/CD variables, and configured conditional jobs and artifacts. I am still deepening my knowledge of advanced features like parent-child pipelines and CI/CD components.\"</p>",
    "difficulty": "Beginner",
    "tags": [
      "Git",
      "DevOps",
      "Cloud",
      "GitLab",
      "CI/CD"
    ],
    "keyPoints": [
      "Give a realistic rating based on hands-on experience.",
      "Support the rating with specific pipeline features you have used.",
      "Mention areas where you are still growing."
    ]
  },
  {
    "question": "What is the key difference between GitLab CI/CD and GitHub Actions?",
    "answer": "<p>Both are popular CI/CD platforms but differ in ecosystem and configuration style.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>GitLab CI/CD</th><th style='padding:8px;border:1px solid #ddd;'>GitHub Actions</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Single .gitlab-ci.yml</td><td style='padding:8px;border:1px solid #ddd;'>Multiple workflows in .github/workflows</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Runners managed by GitLab or self-hosted</td><td style='padding:8px;border:1px solid #ddd;'>GitHub-hosted or self-hosted runners</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Built into GitLab</td><td style='padding:8px;border:1px solid #ddd;'>Integrated marketplace for actions</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Stages group jobs</td><td style='padding:8px;border:1px solid #ddd;'>Jobs run in steps within workflows</td></tr></table>",
    "difficulty": "Intermediate",
    "tags": [
      "Git",
      "DevOps",
      "Cloud",
      "GitLab",
      "GitHub Actions",
      "CI/CD"
    ],
    "keyPoints": [
      "GitLab CI/CD uses a single .gitlab-ci.yml file with stages.",
      "GitHub Actions uses multiple workflow files and a marketplace of reusable actions.",
      "Both support self-hosted runners and secrets management."
    ]
  },
  {
    "question": "What is microservices architecture and why is it used?",
    "answer": "<p><strong>Microservices architecture</strong> structures an application as a collection of small, independently deployable services.</p><h4>Benefits</h4><ul><li><strong>Scalability:</strong> scale services independently.</li><li><strong>Technology diversity:</strong> use the best tool per service.</li><li><strong>Resilience:</strong> failures are isolated to individual services.</li><li><strong>Team autonomy:</strong> smaller teams own end-to-end services.</li></ul><h4>Trade-offs</h4><ul><li>Increased operational complexity.</li><li>Network latency and distributed system challenges.</li><li>Need for DevOps, monitoring, and service discovery.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "Architecture"
    ],
    "keyPoints": [
      "Microservices split applications into independently deployable services.",
      "Benefits include independent scaling, resilience, and technology choice.",
      "Trade-offs include operational complexity and distributed systems challenges."
    ]
  },
  {
    "question": "What is the difference between Microservices vs Monolith Architecture?",
    "answer": "<p>Monoliths and microservices represent different approaches to organizing application code and teams.</p><h4>Comparison</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Monolith</th><th style='padding:8px;border:1px solid #ddd;'>Microservices</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Single deployable unit</td><td style='padding:8px;border:1px solid #ddd;'>Multiple independent services</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Simple to develop and test</td><td style='padding:8px;border:1px solid #ddd;'>Complex but scalable</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Shared database common</td><td style='padding:8px;border:1px solid #ddd;'>Database per service</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Harder to scale parts</td><td style='padding:8px;border:1px solid #ddd;'>Independent scaling</td></tr></table><p>Start with a modular monolith and extract services when boundaries are clear.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "Architecture"
    ],
    "keyPoints": [
      "Monoliths are simpler but harder to scale independently.",
      "Microservices enable independent deployment and scaling.",
      "Consider starting with a modular monolith and evolving."
    ]
  },
  {
    "question": "What is loose coupling in microservices and how do you achieve it?",
    "answer": "<p><strong>Loose coupling</strong> means services depend on each other as little as possible.</p><h4>Techniques</h4><ul><li><strong>Stable APIs:</strong> expose well-versioned contracts.</li><li><strong>Asynchronous messaging:</strong> use events or queues instead of direct synchronous calls.</li><li><strong>Database per service:</strong> avoid shared schemas.</li><li><strong>Circuit breakers:</strong> prevent cascading failures.</li><li><strong>Anti-corruption layer:</strong> isolate external dependencies.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud"
    ],
    "keyPoints": [
      "Expose stable, versioned APIs between services.",
      "Prefer asynchronous messaging over tight synchronous coupling.",
      "Use database-per-service and circuit breakers to reduce dependencies."
    ]
  },
  {
    "question": "What is the Saga pattern and how is it used to manage distributed transactions?",
    "answer": "<p>The <strong>Saga pattern</strong> manages distributed transactions by breaking them into a sequence of local transactions with compensating actions.</p><h4>Types</h4><ul><li><strong>Choreography:</strong> services emit and react to events.</li><li><strong>Orchestration:</strong> a central coordinator manages the saga.</li></ul><pre><code>Order Service → Reserve Payment → Reserve Inventory → Ship\n                ↓ on failure\n            Compensation: refund, release inventory</code></pre>",
    "difficulty": "Advanced",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "Distributed Transactions"
    ],
    "keyPoints": [
      "Sagas break distributed transactions into local steps.",
      "Compensating transactions undo completed steps on failure.",
      "Use choreography for loose coupling or orchestration for visibility."
    ]
  },
  {
    "question": "What is the API Gateway pattern and what are its benefits?",
    "answer": "<p>The <strong>API Gateway</strong> is a single entry point that routes client requests to backend services.</p><h4>Responsibilities</h4><ul><li>Request routing and load balancing.</li><li>Authentication and rate limiting.</li><li>SSL termination and caching.</li><li>Protocol translation and request aggregation.</li></ul><h4>Benefits</h4><ul><li>Simplifies client logic.</li><li>Centralizes cross-cutting concerns.</li><li>Enables versioning and A/B testing.</li></ul>",
    "difficulty": "Intermediate",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "API Gateway"
    ],
    "keyPoints": [
      "API Gateway provides a single entry point for clients.",
      "It handles routing, auth, rate limiting, and caching.",
      "It simplifies clients and centralizes cross-cutting concerns."
    ]
  },
  {
    "question": "What is the Circuit Breaker pattern and how does it prevent cascading failures?",
    "answer": "<p>The <strong>Circuit Breaker</strong> pattern prevents cascading failures by stopping requests to a failing service.</p><h4>States</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>State</th><th style='padding:8px;border:1px solid #ddd;'>Behavior</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Closed</td><td style='padding:8px;border:1px solid #ddd;'>Requests flow normally</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Open</td><td style='padding:8px;border:1px solid #ddd;'>Requests fail fast</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Half-Open</td><td style='padding:8px;border:1px solid #ddd;'>Test if service recovered</td></tr></table><p>Libraries like Resilience4j, Hystrix, and Polly implement circuit breakers.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "Resilience"
    ],
    "keyPoints": [
      "Circuit breakers stop requests to failing services to prevent cascading failures.",
      "States are closed, open, and half-open.",
      "Fail-fast behavior gives downstream services time to recover."
    ]
  },
  {
    "question": "What is Event Sourcing and how does it benefit a microservices architecture?",
    "answer": "<p><strong>Event Sourcing</strong> stores the state of an application as a sequence of immutable events rather than the current state.</p><h4>Benefits</h4><ul><li><strong>Audit log:</strong> complete history of changes.</li><li><strong>Temporal queries:</strong> reconstruct state at any point.</li><li><strong>Event-driven integration:</strong> services react to events.</li></ul><h4>Challenges</h4><ul><li>Schema evolution for events.</li><li>Event store management and snapshotting.</li><li>Eventual consistency with read models.</li></ul>",
    "difficulty": "Advanced",
    "tags": [
      "Microservices",
      "DevOps",
      "Cloud",
      "Event Sourcing"
    ],
    "keyPoints": [
      "Event Sourcing persists state changes as immutable events.",
      "It provides a full audit trail and temporal reconstruction.",
      "Challenges include schema evolution and managing event stores."
    ]
  }
]
};
