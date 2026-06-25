// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.472Z

export const awsQuestions = {
  "questions": [
    {
      "question": "What are the core AWS services and their use cases?",
      "answer": "<p><strong>Core AWS Services by Category:</strong></p><ul><li><strong>Compute:</strong> EC2 (virtual servers), Lambda (serverless), ECS/EKS (containers)</li><li><strong>Storage:</strong> S3 (object storage), EBS (block storage), EFS (file storage)</li><li><strong>Database:</strong> RDS (relational), DynamoDB (NoSQL), ElastiCache (in-memory)</li><li><strong>Networking:</strong> VPC, CloudFront (CDN), Route 53 (DNS), ELB</li><li><strong>Security:</strong> IAM, KMS, WAF, Shield</li><li><strong>Management:</strong> CloudWatch (monitoring), CloudFormation (IaC), CloudTrail (auditing)</li></ul><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Service</th><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>EC2</td><td style='padding:8px;border:1px solid #ddd;'>IaaS</td><td style='padding:8px;border:1px solid #ddd;'>Full control over VMs</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Lambda</td><td style='padding:8px;border:1px solid #ddd;'>FaaS</td><td style='padding:8px;border:1px solid #ddd;'>Event-driven, serverless compute</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3</td><td style='padding:8px;border:1px solid #ddd;'>Object Storage</td><td style='padding:8px;border:1px solid #ddd;'>Static files, backups, data lake</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>RDS</td><td style='padding:8px;border:1px solid #ddd;'>Managed DB</td><td style='padding:8px;border:1px solid #ddd;'>PostgreSQL, MySQL, SQL Server</td></tr></table>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "Cloud Computing"
      ],
      "keyPoints": [
        "Compute: EC2 (virtual servers), Lambda (serverless), ECS/EKS (containers)",
        "Storage: S3 (object storage), EBS (block storage), EFS (file storage)",
        "Database: RDS (relational), DynamoDB (NoSQL), ElastiCache (in-memory)"
      ]
    },
    {
      "question": "Explain Amazon EC2 instance types and pricing models.",
      "answer": "<p><strong>EC2 Instance Families:</strong></p><ul><li><strong>General Purpose (T, M):</strong> Balanced compute, memory, networking</li><li><strong>Compute Optimized (C):</strong> High-performance processors</li><li><strong>Memory Optimized (R, X):</strong> In-memory databases, big data</li><li><strong>Storage Optimized (I, D, H):</strong> High I/O, data warehousing</li><li><strong>Accelerated Computing (P, G, F, Inf):</strong> ML, graphics, FPGA</li></ul><h4>Pricing Models</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Model</th><th style='padding:8px;border:1px solid #ddd;'>Savings</th><th style='padding:8px;border:1px solid #ddd;'>Commitment</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>On-Demand</td><td style='padding:8px;border:1px solid #ddd;'>None</td><td style='padding:8px;border:1px solid #ddd;'>None</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reserved Instances</td><td style='padding:8px;border:1px solid #ddd;'>Up to 72%</td><td style='padding:8px;border:1px solid #ddd;'>1-3 years</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Savings Plans</td><td style='padding:8px;border:1px solid #ddd;'>Up to 72%</td><td style='padding:8px;border:1px solid #ddd;'>Flexible commitment</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Spot Instances</td><td style='padding:8px;border:1px solid #ddd;'>Up to 90%</td><td style='padding:8px;border:1px solid #ddd;'>Interruptible</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Dedicated Hosts</td><td style='padding:8px;border:1px solid #ddd;'>License benefits</td><td style='padding:8px;border:1px solid #ddd;'>Physical server</td></tr></table><pre><code>// Launch Spot Instance via CLI\naws ec2 request-spot-instances \n  --spot-price \"0.05\" \n  --instance-count 1 \n  --launch-specification file://specs.json</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "EC2"
      ],
      "keyPoints": [
        "General Purpose (T, M): Balanced compute, memory, networking",
        "Compute Optimized (C): High-performance processors",
        "Memory Optimized (R, X): In-memory databases, big data"
      ]
    },
    {
      "question": "What is Amazon S3 and what are storage classes?",
      "answer": "<p><strong>Amazon S3</strong> (Simple Storage Service) is an object storage service offering scalability, availability, and security.</p><h4>Storage Classes</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Class</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th><th style='padding:8px;border:1px solid #ddd;'>Availability</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 Standard</td><td style='padding:8px;border:1px solid #ddd;'>Frequently accessed</td><td style='padding:8px;border:1px solid #ddd;'>99.99%</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 Intelligent-Tiering</td><td style='padding:8px;border:1px solid #ddd;'>Unknown/variable access</td><td style='padding:8px;border:1px solid #ddd;'>99.9%</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 Standard-IA</td><td style='padding:8px;border:1px solid #ddd;'>Infrequently accessed</td><td style='padding:8px;border:1px solid #ddd;'>99.9%</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 One Zone-IA</td><td style='padding:8px;border:1px solid #ddd;'>Recreatable data</td><td style='padding:8px;border:1px solid #ddd;'>99.5%</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 Glacier</td><td style='padding:8px;border:1px solid #ddd;'>Archive, minutes retrieval</td><td style='padding:8px;border:1px solid #ddd;'>99.99%</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>S3 Glacier Deep</td><td style='padding:8px;border:1px solid #ddd;'>Long-term, 12hr retrieval</td><td style='padding:8px;border:1px solid #ddd;'>99.99%</td></tr></table><pre><code>// S3 Operations\naws s3 mb s3://my-bucket --region us-east-1\naws s3 cp file.txt s3://my-bucket/\naws s3 sync ./local s3://my-bucket/remote\n\n// Lifecycle policy\naws s3api put-bucket-lifecycle-configuration \n  --bucket my-bucket \n  --lifecycle-configuration file://lifecycle.json</code></pre><h4>S3 Features</h4><ul><li>Versioning, Cross-Region Replication, Event Notifications (SNS/SQS/Lambda)</li><li>Presigned URLs, Transfer Acceleration, Static Website Hosting</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "S3",
        "Storage"
      ],
      "keyPoints": [
        "Versioning, Cross-Region Replication, Event Notifications (SNS/SQS/Lambda)",
        "Presigned URLs, Transfer Acceleration, Static Website Hosting"
      ]
    },
    {
      "question": "Explain AWS IAM and best practices.",
      "answer": "<p><strong>IAM</strong> (Identity and Access Management) controls access to AWS resources securely.</p><h4>Core Concepts</h4><ul><li><strong>Users:</strong> Individual people or applications</li><li><strong>Groups:</strong> Collection of users with shared permissions</li><li><strong>Roles:</strong> Temporary credentials for services/resources</li><li><strong>Policies:</strong> JSON documents defining permissions</li></ul><pre><code>// Example IAM Policy\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetObject\",\n        \"s3:PutObject\"\n      ],\n      \"Resource\": \"arn:aws:s3:::my-bucket/*\",\n      \"Condition\": {\n        \"StringEquals\": {\n          \"s3:x-amz-acl\": \"public-read\"\n        }\n      }\n    }\n  ]\n}</code></pre><h4>Best Practices</h4><ul><li>Use <strong>Least Privilege</strong> — grant minimum necessary permissions</li><li>Enable <strong>MFA</strong> for root and privileged users</li><li>Use <strong>Roles</strong> instead of long-term access keys</li><li>Rotate credentials regularly</li><li>Use <strong>IAM Access Analyzer</strong> to detect unintended access</li><li>Never share root account credentials</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "IAM",
        "Security"
      ],
      "keyPoints": [
        "Users: Individual people or applications",
        "Groups: Collection of users with shared permissions",
        "Roles: Temporary credentials for services/resources"
      ]
    },
    {
      "question": "What is AWS Lambda and when should you use it?",
      "answer": "<p><strong>AWS Lambda</strong> is a serverless compute service that runs code in response to events without provisioning servers.</p><h4>Key Features</h4><ul><li>Event-driven, automatic scaling</li><li>Pay per request + compute time (ms granularity)</li><li>Built-in integration with S3, DynamoDB, SNS, SQS, API Gateway</li><li>Supports Node.js, Python, Java, Go, Ruby, C#</li></ul><pre><code>// Python Lambda handler\nimport json\n\ndef lambda_handler(event, context):\n    return {\n        'statusCode': 200,\n        'body': json.dumps({'message': 'Hello from Lambda!'})\n    }\n\n// SAM template\nResources:\n  HelloWorldFunction:\n    Type: AWS::Serverless::Function\n    Properties:\n      CodeUri: hello-world/\n      Handler: app.lambda_handler\n      Runtime: python3.11\n      Events:\n        HelloWorld:\n          Type: Api\n          Properties:\n            Path: /hello\n            Method: get</code></pre><h4>Limits</h4><ul><li>Memory: 128 MB - 10 GB</li><li>Timeout: 900 seconds (15 min)</li><li>Deployment package: 50 MB (zipped), 250 MB (unzipped)</li><li>Concurrency: 1000 default (adjustable)</li></ul><h4>Use Cases</h4><p>API backends, data processing, ETL jobs, IoT backends, real-time file processing, cron jobs (EventBridge).</p>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "Lambda",
        "Serverless"
      ],
      "keyPoints": [
        "Event-driven, automatic scaling",
        "Pay per request + compute time (ms granularity)",
        "Built-in integration with S3, DynamoDB, SNS, SQS, API Gateway"
      ]
    },
    {
      "question": "Explain Amazon VPC and networking concepts.",
      "answer": "<p><strong>VPC</strong> (Virtual Private Cloud) is a logically isolated network within AWS.</p><h4>VPC Components</h4><ul><li><strong>Subnets:</strong> IP address range within VPC (public/private)</li><li><strong>Route Tables:</strong> Direct network traffic</li><li><strong>Internet Gateway (IGW):</strong> Connects VPC to internet</li><li><strong>NAT Gateway:</strong> Allows private subnets outbound access</li><li><strong>Security Groups:</strong> Stateful firewall at instance level</li><li><strong>NACLs:</strong> Stateless firewall at subnet level</li><li><strong>VPC Peering:</strong> Connect VPCs across regions/accounts</li></ul><pre><code>// VPC with public and private subnets\nVPC: 10.0.0.0/16\n├── Public Subnet: 10.0.1.0/24 (AZ-1a) → IGW\n├── Public Subnet: 10.0.2.0/24 (AZ-1b) → IGW\n├── Private Subnet: 10.0.3.0/24 (AZ-1a) → NAT GW\n└── Private Subnet: 10.0.4.0/24 (AZ-1b) → NAT GW\n\n// Security Group (Stateful - remembers connection)\nInbound: HTTP(80), HTTPS(443) from 0.0.0.0/0\nOutbound: All traffic allowed\n\n// NACL (Stateless - checks both directions)\nInbound: Allow 80, 443\nOutbound: Allow ephemeral ports (1024-65535)</code></pre><h4>Security Group vs NACL</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>Security Group</th><th style='padding:8px;border:1px solid #ddd;'>NACL</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Level</td><td style='padding:8px;border:1px solid #ddd;'>Instance (ENI)</td><td style='padding:8px;border:1px solid #ddd;'>Subnet</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Stateful</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>No</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Rules</td><td style='padding:8px;border:1px solid #ddd;'>Allow only</td><td style='padding:8px;border:1px solid #ddd;'>Allow + Deny</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Evaluation</td><td style='padding:8px;border:1px solid #ddd;'>All rules</td><td style='padding:8px;border:1px solid #ddd;'>Ordered (first match)</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "VPC",
        "Networking"
      ],
      "keyPoints": [
        "Subnets: IP address range within VPC (public/private)",
        "Route Tables: Direct network traffic",
        "Internet Gateway (IGW): Connects VPC to internet"
      ]
    },
    {
      "question": "What is Amazon RDS and its key features?",
      "answer": "<p><strong>Amazon RDS</strong> (Relational Database Service) manages relational databases in the cloud.</p><h4>Supported Engines</h4><ul><li>MySQL, MariaDB, PostgreSQL</li><li>Oracle, SQL Server</li><li><strong>Aurora</strong> (AWS-optimized MySQL/PostgreSQL)</li></ul><h4>Key Features</h4><ul><li><strong>Multi-AZ:</strong> Synchronous standby replica for high availability</li><li><strong>Read Replicas:</strong> Asynchronous replicas for read scaling</li><li><strong>Automated Backups:</strong> Daily snapshots + transaction logs</li><li><strong>Encryption:</strong> At-rest (KMS) and in-transit (TLS)</li><li><strong>Parameter Groups:</strong> Database configuration management</li></ul><pre><code>// Create read replica\naws rds create-db-instance-read-replica \n  --db-instance-identifier my-replica \n  --source-db-instance-identifier my-db\n\n// Aurora Serverless v2\naws rds create-db-cluster \n  --db-cluster-identifier my-aurora-cluster \n  --engine aurora-mysql \n  --engine-mode serverless \n  --scaling-configuration MinCapacity=0.5,MaxCapacity=16</code></pre><h4>RDS vs Aurora</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>RDS</th><th style='padding:8px;border:1px solid #ddd;'>Aurora</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Performance</td><td style='padding:8px;border:1px solid #ddd;'>Standard</td><td style='padding:8px;border:1px solid #ddd;'>Up to 5x MySQL, 3x PostgreSQL</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Storage</td><td style='padding:8px;border:1px solid #ddd;'>Provisioned</td><td style='padding:8px;border:1px solid #ddd;'>Auto-scaling (10GB - 128TB)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Replicas</td><td style='padding:8px;border:1px solid #ddd;'>Up to 5</td><td style='padding:8px;border:1px solid #ddd;'>Up to 15</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Storage cost</td><td style='padding:8px;border:1px solid #ddd;'>Higher</td><td style='padding:8px;border:1px solid #ddd;'>Lower (replication cost included)</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "RDS",
        "Database"
      ],
      "keyPoints": [
        "MySQL, MariaDB, PostgreSQL",
        "Aurora (AWS-optimized MySQL/PostgreSQL)",
        "Multi-AZ: Synchronous standby replica for high availability"
      ]
    },
    {
      "question": "Explain AWS Auto Scaling and Load Balancing.",
      "answer": "<p><strong>Auto Scaling</strong> adjusts capacity to maintain performance and minimize costs.</p><h4>Auto Scaling Components</h4><ul><li><strong>Launch Template/Configuration:</strong> Instance blueprint</li><li><strong>Auto Scaling Group (ASG):</strong> Collection of EC2 instances</li><li><strong>Scaling Policies:</strong> Rules for adding/removing instances</li></ul><h4>Scaling Types</h4><ul><li><strong>Target Tracking:</strong> Maintain metric at target (e.g., CPU = 50%)</li><li><strong>Step Scaling:</strong> Add/remove based on CloudWatch alarms</li><li><strong>Scheduled Scaling:</strong> Scale at predictable times</li><li><strong>Predictive Scaling:</strong> ML-based forecasting</li></ul><h4>Load Balancers</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Layer</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ALB</td><td style='padding:8px;border:1px solid #ddd;'>L7 (HTTP/HTTPS)</td><td style='padding:8px;border:1px solid #ddd;'>Web apps, path-based routing</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>NLB</td><td style='padding:8px;border:1px solid #ddd;'>L4 (TCP/UDP)</td><td style='padding:8px;border:1px solid #ddd;'>High throughput, low latency</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>CLB</td><td style='padding:8px;border:1px solid #ddd;'>L4/L7</td><td style='padding:8px;border:1px solid #ddd;'>Legacy (not recommended)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>GWLB</td><td style='padding:8px;border:1px solid #ddd;'>L3</td><td style='padding:8px;border:1px solid #ddd;'>Network appliances, firewalls</td></tr></table><pre><code>// ALB with path-based routing\n/\n├── /api/* → API Target Group (EC2 instances)\n├── /static/* → Static Target Group (S3 via CloudFront)\n└── /admin/* → Admin Target Group (restricted IPs)</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "Auto Scaling",
        "ELB"
      ],
      "keyPoints": [
        "Launch Template/Configuration: Instance blueprint",
        "Auto Scaling Group (ASG): Collection of EC2 instances",
        "Scaling Policies: Rules for adding/removing instances"
      ]
    },
    {
      "question": "What is AWS CloudFormation and Infrastructure as Code?",
      "answer": "<p><strong>CloudFormation</strong> is an IaC service that models and provisions AWS resources using templates.</p><pre><code>// CloudFormation YAML template\nAWSTemplateFormatVersion: '2010-09-09'\nDescription: Simple EC2 instance\n\nParameters:\n  InstanceType:\n    Type: String\n    Default: t2.micro\n    AllowedValues: [t2.micro, t2.small]\n\nResources:\n  MyEC2Instance:\n    Type: AWS::EC2::Instance\n    Properties:\n      ImageId: ami-12345678\n      InstanceType: !Ref InstanceType\n      SecurityGroupIds:\n        - !Ref InstanceSecurityGroup\n\n  InstanceSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: Enable SSH and HTTP\n      SecurityGroupIngress:\n        - IpProtocol: tcp\n          FromPort: 22\n          ToPort: 22\n          CidrIp: 0.0.0.0/0\n        - IpProtocol: tcp\n          FromPort: 80\n          ToPort: 80\n          CidrIp: 0.0.0.0/0\n\nOutputs:\n  InstanceIP:\n    Value: !GetAtt MyEC2Instance.PublicIp</code></pre><h4>CloudFormation Concepts</h4><ul><li><strong>Stack:</strong> Collection of resources managed as a unit</li><li><strong>Change Sets:</strong> Preview changes before applying</li><li><strong>Drift Detection:</strong> Detect manual changes outside CloudFormation</li><li><strong>Nested Stacks:</strong> Reusable template components</li><li><strong>StackSets:</strong> Deploy across multiple accounts/regions</li></ul><h4>Alternatives</h4><p>Terraform (multi-cloud), AWS CDK (TypeScript/Python), Pulumi, SAM (serverless).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "CloudFormation",
        "IaC"
      ],
      "keyPoints": [
        "Stack: Collection of resources managed as a unit",
        "Change Sets: Preview changes before applying",
        "Drift Detection: Detect manual changes outside CloudFormation"
      ]
    },
    {
      "question": "Explain AWS monitoring and logging services.",
      "answer": "<p><strong>AWS provides comprehensive observability tools:</strong></p><h4>CloudWatch</h4><ul><li><strong>Metrics:</strong> Performance data (CPU, memory, custom metrics)</li><li><strong>Alarms:</strong> Trigger actions based on metric thresholds</li><li><strong>Logs:</strong> Centralized log collection and analysis</li><li><strong>Dashboards:</strong> Visualize metrics</li><li><strong>Insights:</strong> Log pattern analysis</li></ul><h4>X-Ray</h4><p>Distributed tracing for microservices, traces requests across services.</p><h4>CloudTrail</h4><p>Account activity auditing — logs API calls, security analysis, compliance.</p><pre><code>// CloudWatch alarm\naws cloudwatch put-metric-alarm \n  --alarm-name high-cpu \n  --alarm-description \"CPU over 80%\" \n  --metric-name CPUUtilization \n  --namespace AWS/EC2 \n  --statistic Average \n  --threshold 80 \n  --comparison-operator GreaterThanThreshold \n  --dimensions Name=InstanceId,Value=i-123456 \n  --evaluation-periods 2\n\n// CloudWatch Logs Insights\nfields @timestamp, @message\n| filter @message like /ERROR/\n| stats count() by bin(5m)\n| sort @timestamp desc</code></pre><h4>Third-Party Integrations</h4><p>Datadog, New Relic, Splunk, Elastic Stack, Grafana.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "CloudWatch",
        "Monitoring"
      ],
      "keyPoints": [
        "Metrics: Performance data (CPU, memory, custom metrics)",
        "Alarms: Trigger actions based on metric thresholds",
        "Logs: Centralized log collection and analysis"
      ]
    },
    {
      "question": "What is AWS ECS vs EKS vs Fargate?",
      "answer": "<p><strong>Container Orchestration Options on AWS:</strong></p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Service</th><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ECS</td><td style='padding:8px;border:1px solid #ddd;'>AWS-native container orchestration</td><td style='padding:8px;border:1px solid #ddd;'>Simple, AWS-integrated</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>EKS</td><td style='padding:8px;border:1px solid #ddd;'>Managed Kubernetes</td><td style='padding:8px;border:1px solid #ddd;'>K8s ecosystem, portability</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Fargate</td><td style='padding:8px;border:1px solid #ddd;'>Serverless compute for containers</td><td style='padding:8px;border:1px solid #ddd;'>No server management</td></tr></table><pre><code>// ECS Task Definition\n{\n  \"family\": \"my-app\",\n  \"networkMode\": \"awsvpc\",\n  \"requiresCompatibilities\": [\"FARGATE\"],\n  \"cpu\": \"256\",\n  \"memory\": \"512\",\n  \"containerDefinitions\": [\n    {\n      \"name\": \"app\",\n      \"image\": \"my-app:latest\",\n      \"portMappings\": [{ \"containerPort\": 8080 }],\n      \"logConfiguration\": {\n        \"logDriver\": \"awslogs\",\n        \"options\": {\n          \"awslogs-group\": \"/ecs/my-app\",\n          \"awslogs-region\": \"us-east-1\"\n        }\n      }\n    }\n  ]\n}</code></pre><h4>Decision Matrix</h4><ul><li><strong>ECS + EC2:</strong> Need GPU, large instances, cost optimization</li><li><strong>ECS + Fargate:</strong> Simple workloads, no infrastructure management</li><li><strong>EKS + EC2:</strong> Complex K8s apps, need DaemonSets</li><li><strong>EKS + Fargate:</strong> Serverless K8s, simple pods</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "ECS",
        "EKS",
        "Fargate",
        "Containers"
      ],
      "keyPoints": [
        "ECS + EC2: Need GPU, large instances, cost optimization",
        "ECS + Fargate: Simple workloads, no infrastructure management",
        "EKS + EC2: Complex K8s apps, need DaemonSets"
      ]
    },
    {
      "question": "Explain AWS API Gateway and its use cases.",
      "answer": "<p><strong>Amazon API Gateway</strong> creates, publishes, and manages APIs at scale.</p><h4>Types</h4><ul><li><strong>HTTP API:</strong> Low latency, low cost, simple (v2)</li><li><strong>REST API:</strong> Full feature set, request/response transformation</li><li><strong>WebSocket API:</strong> Real-time, bidirectional communication</li></ul><h4>Features</h4><ul><li>Throttling, caching, API keys</li><li>Request/response transformation</li><li>Lambda integration, HTTP proxy, mock</li><li>Custom authorizers (Lambda, Cognito)</li><li>Usage plans and quotas</li><li>Canary deployments</li></ul><pre><code>// SAM template with API Gateway\nResources:\n  MyApi:\n    Type: AWS::Serverless::HttpApi\n    Properties:\n      StageName: prod\n      Auth:\n        Authorizers:\n          OAuth2Authorizer:\n            IdentitySource: \"$request.header.Authorization\"\n            JwtConfiguration:\n              audience:\n                - Ref: UserPoolClient\n              issuer: !GetAtt UserPool.ProviderURL\n\n  GetUserFunction:\n    Type: AWS::Serverless::Function\n    Properties:\n      CodeUri: ./src\n      Handler: index.handler\n      Runtime: nodejs18.x\n      Events:\n        GetUser:\n          Type: HttpApi\n          Properties:\n            ApiId: !Ref MyApi\n            Path: /users/{id}\n            Method: GET</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "API Gateway",
        "Serverless"
      ],
      "keyPoints": [
        "HTTP API: Low latency, low cost, simple (v2)",
        "REST API: Full feature set, request/response transformation",
        "WebSocket API: Real-time, bidirectional communication"
      ]
    },
    {
      "question": "What are AWS Well-Architected Framework pillars?",
      "answer": "<p>The <strong>Well-Architected Framework</strong> provides best practices across 6 pillars:</p><ol><li><strong>Operational Excellence:</strong> Run and monitor systems, continuously improve</li><li><strong>Security:</strong> Protect information and systems</li><li><strong>Reliability:</strong> Recover from failures, dynamically scale</li><li><strong>Performance Efficiency:</strong> Use resources efficiently, evolve with demand</li><li><strong>Cost Optimization:</strong> Avoid unnecessary costs, optimize over time</li><li><strong>Sustainability:</strong> Minimize environmental impact</li></ol><h4>Key Practices</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pillar</th><th style='padding:8px;border:1px solid #ddd;'>Key Practices</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Security</td><td style='padding:8px;border:1px solid #ddd;'>IAM, encryption, VPC, WAF, monitoring</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reliability</td><td style='padding:8px;border:1px solid #ddd;'>Multi-AZ, backups, auto-recovery, chaos engineering</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cost</td><td style='padding:8px;border:1px solid #ddd;'>Reserved capacity, Spot, right-sizing, tagging</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Performance</td><td style='padding:8px;border:1px solid #ddd;'>Caching, CDN, SSD, global tables</td></tr></table><p>Use the Well-Architected Tool in AWS Console to review workloads against these pillars.</p>",
      "difficulty": "Beginner",
      "tags": [
        "AWS",
        "Architecture",
        "Best Practices"
      ],
      "keyPoints": [
        "Operational Excellence: Run and monitor systems, continuously improve",
        "Security: Protect information and systems",
        "Reliability: Recover from failures, dynamically scale"
      ]
    },
    {
      "question": "Explain AWS SQS and SNS.",
      "answer": "<p><strong>SQS</strong> (Simple Queue Service) and <strong>SNS</strong> (Simple Notification Service) are messaging services.</p><h4>SQS — Queue Service</h4><ul><li><strong>Standard Queue:</strong> Best-effort ordering, at-least-once delivery, high throughput</li><li><strong>FIFO Queue:</strong> Strict ordering, exactly-once processing, limited throughput</li><li><strong>Visibility Timeout:</strong> Time message is invisible after being received</li><li><strong>Dead Letter Queue:</strong> Captures failed messages for analysis</li></ul><pre><code>// Send message\naws sqs send-message \n  --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \n  --message-body \"Process this order\"\n\n// Receive and delete\naws sqs receive-message --queue-url $QUEUE_URL\naws sqs delete-message --queue-url $QUEUE_URL --receipt-handle $HANDLE</code></pre><h4>SNS — Notification Service</h4><ul><li>Pub/Sub messaging</li><li>Push delivery to multiple subscribers</li><li>Supports email, SMS, Lambda, SQS, HTTP endpoints</li></ul><pre><code>// Create topic and subscribe\naws sns create-topic --name order-events\naws sns subscribe \n  --topic-arn arn:aws:sns:us-east-1:123456789012:order-events \n  --protocol lambda \n  --notification-endpoint arn:aws:lambda:...:function:processor</code></pre><h4>SQS vs SNS vs EventBridge</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>SQS</th><th style='padding:8px;border:1px solid #ddd;'>SNS</th><th style='padding:8px;border:1px solid #ddd;'>EventBridge</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Pattern</td><td style='padding:8px;border:1px solid #ddd;'>Point-to-point</td><td style='padding:8px;border:1px solid #ddd;'>Pub/Sub</td><td style='padding:8px;border:1px solid #ddd;'>Event bus</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Delivery</td><td style='padding:8px;border:1px solid #ddd;'>Pull (polling)</td><td style='padding:8px;border:1px solid #ddd;'>Push</td><td style='padding:8px;border:1px solid #ddd;'>Push</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Fan-out</td><td style='padding:8px;border:1px solid #ddd;'>No</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Filtering</td><td style='padding:8px;border:1px solid #ddd;'>No</td><td style='padding:8px;border:1px solid #ddd;'>Basic</td><td style='padding:8px;border:1px solid #ddd;'>Advanced (JSON)</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "SQS",
        "SNS",
        "Messaging"
      ],
      "keyPoints": [
        "Standard Queue: Best-effort ordering, at-least-once delivery, high throughput",
        "FIFO Queue: Strict ordering, exactly-once processing, limited throughput",
        "Visibility Timeout: Time message is invisible after being received"
      ]
    },
    {
      "question": "What is AWS CloudFront and how does it work?",
      "answer": "<p><strong>Amazon CloudFront</strong> is a CDN that delivers content globally with low latency.</p><h4>Key Concepts</h4><ul><li><strong>Edge Locations:</strong> 400+ points of presence worldwide</li><li><strong>Origins:</strong> S3, EC2, ELB, custom HTTP servers</li><li><strong>Distributions:</strong> Configuration for content delivery</li><li><strong>Behaviors:</strong> URL pattern rules for caching</li><li><strong>Cache Policies:</strong> TTL, headers, cookies, query strings</li></ul><h4>Features</h4><ul><li>HTTPS/TLS encryption</li><li>Origin Access Identity (OAI) for S3</li><li>Lambda@Edge for edge computing</li><li>Field-level encryption</li><li>Signed URLs/cookies for restricted content</li><li>Real-time logs</li></ul><pre><code>// CloudFront with S3 origin\nDistribution:\n  Origins:\n    - DomainName: my-bucket.s3.amazonaws.com\n      S3OriginConfig:\n        OriginAccessIdentity: origin-access-identity/cloudfront/ABC123\n  DefaultCacheBehavior:\n    ViewerProtocolPolicy: redirect-to-https\n    CachePolicyId: 658327ea-f89d-4fab-a63d-7e88639e58f6 # Managed-CachingOptimized\n    Compress: true\n  PriceClass: PriceClass_100 # North America/Europe</code></pre><h4>Cache Invalidation</h4><pre><code>aws cloudfront create-invalidation \n  --distribution-id E1234567890ABC \n  --paths \"/index.html\" \"/images/*\"</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "AWS",
        "CloudFront",
        "CDN"
      ],
      "keyPoints": [
        "Edge Locations: 400+ points of presence worldwide",
        "Origins: S3, EC2, ELB, custom HTTP servers",
        "Distributions: Configuration for content delivery"
      ]
    },
    {
      "question": "EC2 vs ECS vs EKS — when to use which?",
      "answer": "<p>AWS gives you three main compute options for running containerized and non-containerized workloads. The right choice depends on team skills, workload type, and portability needs.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Service</th><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Best For</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>EC2</td><td style='padding:8px;border:1px solid #ddd;'>Virtual machines</td><td style='padding:8px;border:1px solid #ddd;'>Full control, any workload</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ECS</td><td style='padding:8px;border:1px solid #ddd;'>AWS-native containers</td><td style='padding:8px;border:1px solid #ddd;'>Simpler, deeply AWS-integrated</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>EKS</td><td style='padding:8px;border:1px solid #ddd;'>Managed Kubernetes</td><td style='padding:8px;border:1px solid #ddd;'>Portability, K8s ecosystem</td></tr></table><ul><li><strong>EC2:</strong> choose when you need full control of the OS, custom networking, GPUs, or run legacy or non-containerized software.</li><li><strong>ECS:</strong> choose for AWS-only deployments, simpler ops, deeper integration with ALB, IAM, and CloudFormation, and when Kubernetes is overkill.</li><li><strong>EKS:</strong> choose when you need the Kubernetes ecosystem (Helm, Operators, service mesh), multi-cloud portability, or already-standardized on K8s.</li></ul><pre><code class=\"language-yaml\"># Decision matrix\nteam_k8s_experience: EKS or ECS\ngpu_or_custom_os: EC2\naws_lock_in_ok: ECS\nmulti_cloud_needed: EKS\nsimple_web_service: ECS or EKS</code></pre><p>Avoid choosing based on hype. Most AWS-only teams find ECS faster to operate; choose EKS only when you actually need Kubernetes.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "EC2", "ECS", "EKS", "Containers"],
      "keyPoints": [
        "EC2 provides full VM control for any workload.",
        "ECS is AWS-native, simpler, and tightly integrated with AWS services.",
        "EKS is managed Kubernetes, chosen for portability and the K8s ecosystem."
      ]
    },
    {
      "question": "When would you choose Lambda over ECS?",
      "answer": "<p>Lambda and ECS solve different problems. Pick based on workload shape, traffic pattern, and cost profile.</p><ul><li><strong>Lambda:</strong> event-driven, sporadic, short-lived (&lt;15 min) workloads. Pay per request and ms of compute. No infrastructure to manage.</li><li><strong>ECS (with Fargate or EC2):</strong> long-running, always-on services with steady or predictable traffic. Better cost for sustained load and full container control.</li></ul><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Factor</th><th style='padding:8px;border:1px solid #ddd;'>Lambda</th><th style='padding:8px;border:1px solid #ddd;'>ECS</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Duration limit</td><td style='padding:8px;border:1px solid #ddd;'>15 min max</td><td style='padding:8px;border:1px solid #ddd;'>Unlimited</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cold start</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>No (always running)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cost shape</td><td style='padding:8px;border:1px solid #ddd;'>Per invocation</td><td style='padding:8px;border:1px solid #ddd;'>Per running task</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Best for</td><td style='padding:8px;border:1px solid #ddd;'>Bursty, event-driven</td><td style='padding:8px;border:1px solid #ddd;'>Steady, long-running</td></tr></table><pre><code class=\"language-python\"># Lambda - event handler\ndef lambda_handler(event, context):\n    process_s3_event(event)\n    return {'statusCode': 200}\n\n# ECS - long-running web service\n# Stable baseline + predictable scaling, no per-invocation overhead</code></pre><p>Choose Lambda when traffic is intermittent and you want zero ops. Choose ECS when the workload is steady, latency-sensitive, or runs longer than 15 minutes.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "Lambda", "ECS", "Serverless"],
      "keyPoints": [
        "Lambda suits event-driven, short-lived, sporadic workloads.",
        "ECS suits long-running, steady-traffic services with predictable cost.",
        "Lambda has cold starts; ECS tasks stay warm and are always-on."
      ]
    },
    {
      "question": "How does S3 achieve 11 nines of durability?",
      "answer": "<p>Amazon S3 is designed for <strong>99.999999999% (11 nines) of object durability</strong> over a given year, meaning you expect to lose at most one object per 10 billion stored.</p><ul><li><strong>Cross-AZ replication:</strong> every object is automatically stored across at least three Availability Zones within a region, so losing one AZ does not lose data.</li><li><strong>Checksums and integrity:</strong> S3 computes and verifies checksums on every write and read, detecting and repairing silent corruption.</li><li><strong>Versioning:</strong> keeps multiple variants of an object so accidental overwrites or deletes are recoverable.</li><li><strong>MFA Delete:</strong> requires multi-factor authentication to delete objects or change versioning, protecting against malicious or accidental deletion.</li><li><strong>Cross-Region Replication (CRR):</strong> asynchronously copies objects to another region for disaster recovery and compliance.</li><li><strong>Object Lock:</strong> enforces write-once-read-many (WORM) retention for compliance use cases.</li></ul><pre><code class=\"language-bash\"># Enable versioning and replication\naws s3api put-bucket-versioning \\\n  --bucket my-bucket \\\n  --versioning-configuration Status=Enabled\n\naws s3api put-bucket-replication \\\n  --bucket my-bucket \\\n  --replication-configuration file://replication.json</code></pre><p>Durability is different from availability (which is 99.99% for S3 Standard). To protect against regional failures, pair durability with cross-region replication and a tested DR plan.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "S3", "Storage", "Reliability"],
      "keyPoints": [
        "S3 stores objects across at least three Availability Zones.",
        "Checksums, versioning, and MFA Delete protect against corruption and accidental loss.",
        "Cross-Region Replication and Object Lock add disaster recovery and compliance."
      ]
    },
    {
      "question": "RDS vs DynamoDB — when to choose which?",
      "answer": "<p>RDS is a managed <strong>relational</strong> database; DynamoDB is a managed <strong>NoSQL key-value/document</strong> database. They are built for different access patterns.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>RDS</th><th style='padding:8px;border:1px solid #ddd;'>DynamoDB</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Data model</td><td style='padding:8px;border:1px solid #ddd;'>Relational, SQL</td><td style='padding:8px;border:1px solid #ddd;'>Key-value / document</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Schema</td><td style='padding:8px;border:1px solid #ddd;'>Fixed, normalized</td><td style='padding:8px;border:1px solid #ddd;'>Flexible, denormalized</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Vertical; read replicas</td><td style='padding:8px;border:1px solid #ddd;'>Horizontal, auto</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Latency</td><td style='padding:8px;border:1px solid #ddd;'>Millisecond</td><td style='padding:8px;border:1px solid #ddd;'>Single-digit ms at any scale</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Joins / ACID</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>Limited transactions only</td></tr></table><ul><li><strong>Choose RDS</strong> for complex queries, joins, transactions, fixed schemas, and when your team thinks in SQL.</li><li><strong>Choose DynamoDB</strong> for simple key-based lookups at any scale, predictable single-digit ms latency, and auto-scaling with no ops.</li></ul><pre><code class=\"language-sql\">-- RDS example\nSELECT u.name, SUM(o.total) AS revenue\nFROM users u JOIN orders o ON o.user_id = u.id\nGROUP BY u.id\nHAVING revenue &gt; 1000;\n\n# DynamoDB example\ntable.get_item(Key={'user_id': 'u123'})</code></pre><p>Many systems use both: RDS for transactional/analytical workloads, DynamoDB for session, cart, and high-throughput lookups.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "RDS", "DynamoDB", "Database"],
      "keyPoints": [
        "RDS is relational with SQL, joins, ACID, and fixed schema; scales vertically.",
        "DynamoDB is key-value with single-digit ms latency at any scale; no joins.",
        "Use RDS for complex queries and DynamoDB for simple lookups at scale."
      ]
    },
    {
      "question": "What is the difference between ALB and NLB?",
      "answer": "<p>Both are managed load balancers in AWS, but they operate at different OSI layers and serve different protocols.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>ALB</th><th style='padding:8px;border:1px solid #ddd;'>NLB</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Layer</td><td style='padding:8px;border:1px solid #ddd;'>Layer 7 (HTTP/HTTPS)</td><td style='padding:8px;border:1px solid #ddd;'>Layer 4 (TCP/UDP/TLS)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Routing</td><td style='padding:8px;border:1px solid #ddd;'>Path, host, header, query</td><td style='padding:8px;border:1px solid #ddd;'>Port-based</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Target types</td><td style='padding:8px;border:1px solid #ddd;'>EC2, IP, Lambda, ECS</td><td style='padding:8px;border:1px solid #ddd;'>EC2, IP, ALB, ECS</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Static IP</td><td style='padding:8px;border:1px solid #ddd;'>No</td><td style='padding:8px;border:1px solid #ddd;'>Yes (per AZ)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Source IP preserved</td><td style='padding:8px;border:1px solid #ddd;'>Via X-Forwarded-For</td><td style='padding:8px;border:1px solid #ddd;'>Yes (by default)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>WebSocket / HTTP/2</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>Limited</td></tr></table><ul><li><strong>ALB:</strong> best for HTTP/HTTPS workloads that need path-based or host-based routing, WebSocket, gRPC, or Lambda targets.</li><li><strong>NLB:</strong> best for ultra-low latency, TCP/UDP, gaming, IoT, financial trading, or when you need static IPs or preserved client source IPs.</li></ul><pre><code class=\"language-yaml\"># ALB path-based routing\n/api/*  -&gt; api-tg\n/static -&gt; static-tg (S3 via CloudFront OAC)</code></pre><p>Choose by protocol and routing needs. Use ALB for web apps and NLB for raw TCP performance or when source IP matters.</p>",
      "difficulty": "Intermediate",
      "tags": ["AWS", "ELB", "ALB", "NLB", "Networking"],
      "keyPoints": [
        "ALB is Layer 7 for HTTP/HTTPS with path, host, and header routing.",
        "NLB is Layer 4 for TCP/UDP with static IPs and ultra-low latency.",
        "Choose ALB for web apps; choose NLB for performance, TCP, or static IP needs."
      ]
    },
    {
      "question": "How would you design a highly available application in AWS?",
      "answer": "<p>High availability (HA) means the application survives AZ and (ideally) regional failures with minimal or no downtime. The design combines redundancy, automation, and monitoring.</p><ul><li><strong>Multi-AZ deployment:</strong> run compute and data in at least two AZs. AZs in a region are independent datacenters with low-latency links.</li><li><strong>Auto Scaling Groups:</strong> replace failed instances automatically and scale for load.</li><li><strong>ALB across AZs:</strong> an Application Load Balancer distributes traffic across healthy targets in multiple AZs.</li><li><strong>RDS Multi-AZ:</strong> synchronous standby replica in another AZ with automatic failover.</li><li><strong>S3 cross-region replication:</strong> durable object storage replicated to a second region for DR.</li><li><strong>Route 53 health checks and failover:</strong> DNS-level failover between regions or endpoints.</li><li><strong>CloudFront CDN:</strong> serves content from edge locations and absorbs traffic spikes.</li><li><strong>Stateless app tier:</strong> store sessions in ElastiCache/DynamoDB so any instance can serve any user.</li></ul><pre><code class=\"language-text\">User -&gt; Route 53 -&gt; CloudFront -&gt; ALB (Multi-AZ) -&gt; ASG EC2/Fargate\n                                                   |\n                                                   -&gt; ElastiCache (sessions)\n                                                   -&gt; RDS Multi-AZ\n                                                   -&gt; S3 (with CRR)</code></pre><p>For regional disaster recovery, add a warm standby in a second region with Route 53 failover routing. Always test the failover before relying on it.</p>",
      "difficulty": "Advanced",
      "tags": ["AWS", "Architecture", "High Availability", "Reliability"],
      "keyPoints": [
        "Spread compute and data across multiple Availability Zones.",
        "Use Auto Scaling, ALB, RDS Multi-AZ, and S3 cross-region replication.",
        "Add Route 53 health checks and CloudFront for DNS failover and edge caching."
      ]
    },
    {
      "question": "How do you troubleshoot high latency in AWS?",
      "answer": "<p>High-latency troubleshooting starts with measuring where the time is spent, then drilling into the slowest component.</p><ol><li><strong>Measure end-to-end:</strong> use CloudWatch p99 latency metrics and X-Ray distributed traces to identify which service or hop is slow.</li><li><strong>Application tier:</strong> profile the code, check for N+1 queries, garbage collection pauses, thread pool saturation, or blocking I/O.</li><li><strong>Database tier:</strong> enable Performance Insights, check slow query logs, missing indexes, lock contention, and replica lag.</li><li><strong>Network:</strong> review VPC flow logs, look for cross-AZ traffic, NAT Gateway bottlenecks, or DNS resolution time.</li><li><strong>Cache hit ratio:</strong> low hit ratios on ElastiCache or CloudFront push load back to the origin.</li><li><strong>CDN coverage:</strong> ensure static assets are served from CloudFront edges, not the origin.</li><li><strong>Instance sizing:</strong> check CPU, memory, and network utilization; the instance type may be undersized.</li><li><strong>Concurrency limits:</strong> Lambda or API Gateway throttling, or database connection pool exhaustion.</li></ol><pre><code class=\"language-promql\"># CloudWatch Insights / Prometheus\nhistogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))\nrate(http_requests_total{status=~\"5..\"}[5m])\n\n# X-Ray service map highlights slow traces\n# Look for segments with high latency annotations</code></pre><p>Always optimize the slowest hop first. Premature optimization without data wastes effort and may not improve user experience.</p>",
      "difficulty": "Advanced",
      "tags": ["AWS", "CloudWatch", "X-Ray", "Performance", "Troubleshooting"],
      "keyPoints": [
        "Use X-Ray and CloudWatch p99 metrics to find the slowest component.",
        "Check DB query time, network latency, cache hit ratio, and CDN coverage.",
        "Optimize the slowest hop first, not the easiest to change."
      ]
    }
  ]
}
