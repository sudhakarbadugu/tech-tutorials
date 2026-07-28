export const restApiDesignModule2 = {
  "module-intro": {
    "title": "Chapter Overview",
    "sections": [
        {
        "heading": "What is REST API Design?",
        "text": "REST (Representational State Transfer) API design is the practice of building HTTP-based interfaces that expose resources to clients in a stateless, cacheable, and uniform way. Good REST API design directly impacts developer experience, system performance, security, and long-term maintainability. This module covers the complete lifecycle of designing production-grade REST APIs: naming resources, choosing HTTP semantics, handling errors, paginating and caching responses, securing endpoints, versioning, documenting contracts, and applying advanced patterns for real-world scale."
      },
        {
        "heading": "What You Will Learn",
        "list": [
            "Resource-oriented URL design and naming conventions",
            "HTTP method semantics, idempotency, and status codes",
            "Robust request/response payload design and error envelopes",
            "Pagination, filtering, and caching strategies",
            "Authentication, authorization, rate limiting, and CORS",
            "API versioning and deprecation strategies",
            "OpenAPI contracts and generated documentation",
            "Async operations, bulk endpoints, webhooks, and HATEOAS"
          ]
      },
        {
        "heading": "REST Design Principles",
        "list": [
            "<strong>Resource orientation:</strong> URLs name things, not actions \u2014 use nouns like /orders, not verbs like /getOrders.",
            "<strong>Statelessness:</strong> Every request contains all context needed; the server does not store client session state.",
            "<strong>Uniform interface:</strong> Standard HTTP verbs and status codes give clients a predictable contract.",
            "<strong>Cacheability:</strong> Use HTTP caching headers so clients and CDNs can avoid unnecessary round-trips.",
            "<strong>Layered system:</strong> Clients should not need to know whether they are talking to a load balancer, gateway, or origin server."
          ]
      }
      ]
  },
  "resources-and-urls": {
    "title": "Resources & URL Design",
    "sections": [
        {
        "heading": "Think in Resources, Not Actions",
        "text": "A REST API exposes resources \u2014 domain entities like users, orders, products, and invoices. Each resource gets a URL. The HTTP verb tells the server what to do with that resource. Avoid putting verbs in the path because the verb is already encoded in the HTTP method."
      },
        {
        "heading": "Good vs Bad URL Naming",
        "table": {
          "headers": [
              "Bad (verb-based)",
              "Good (resource-based)"
            ],
          "rows": [
              [
                "/getUser?id=42",
                "GET /users/42"
              ],
              [
                "/createOrder",
                "POST /orders"
              ],
              [
                "/updateProduct/123",
                "PATCH /products/123"
              ],
              [
                "/deleteInvoice?inv=99",
                "DELETE /invoices/99"
              ],
              [
                "/fetchOrdersByCustomer?cust=7",
                "GET /customers/7/orders"
              ]
            ]
        }
      },
        {
        "heading": "Plural vs Singular",
        "text": "Use plural nouns for collection URLs. A collection contains many items, and the same URL can represent the whole collection or a single member. Plurals read naturally and scale well as the API grows.",
        "list": [
            "GET /orders \u2014 list orders",
            "POST /orders \u2014 create a new order",
            "GET /orders/1001 \u2014 fetch one order",
            "PATCH /orders/1001 \u2014 update one order",
            "DELETE /orders/1001 \u2014 remove one order"
          ]
      },
        {
        "heading": "Nested Resources",
        "text": "Use URL hierarchy to express ownership or containment. Keep nesting shallow \u2014 two or three levels is usually enough. Deep nesting makes URLs brittle and harder to cache.",
        "code": "GET    /customers/42/orders          \u2014 list orders for a customer\nGET    /customers/42/orders/1001     \u2014 one order of that customer\nGET    /orders/1001/items          \u2014 line items of an order\nPOST   /orders/1001/items          \u2014 add a line item\nGET    /orders/1001/payments       \u2014 payments for an order",
        "language": "text"
      },
        {
        "heading": "URL Anti-Patterns",
        "list": [
            "Mixing resource IDs and actions: /orders/1001/process \u2014 prefer POST /orders/1001/transitions or POST /order-actions",
            "Deep nesting beyond three levels: /shops/7/categories/3/products/9/reviews/12 \u2014 flatten to /reviews/12 when possible",
            "Case-sensitive path confusion: prefer lowercase with hyphens (/order-items) over camelCase (/orderItems) or underscores (/order_items)",
            "File extensions in paths: /orders.json \u2014 rely on Accept and Content-Type headers instead"
          ]
      },
        {
        "heading": "URL Components Reference",
        "table": {
          "headers": [
              "Component",
              "Example",
              "Purpose"
            ],
          "rows": [
              [
                "Base URL",
                "https://api.example.com",
                "Stable root for all requests"
              ],
              [
                "Version",
                "/v1",
                "API version segment"
              ],
              [
                "Resource path",
                "/customers/42/orders",
                "Resource hierarchy"
              ],
              [
                "Query params",
                "?status=paid&limit=20",
                "Filtering, sorting, pagination"
              ],
              [
                "Fragment",
                "#comment-5",
                "Client-side only; ignored by server"
              ]
            ]
        }
      }
      ]
  },
  "http-methods-and-semantics": {
    "title": "HTTP Methods & Semantics",
    "sections": [
        {
        "heading": "Mapping Verbs to Actions",
        "text": "REST reuses HTTP verbs as the uniform interface. Each verb has a precise meaning, and clients rely on that meaning for retries, caching, and error handling."
      },
        {
        "heading": "HTTP Method Summary",
        "table": {
          "headers": [
              "Method",
              "Action",
              "Safe",
              "Idempotent",
              "Typical Success Status"
            ],
          "rows": [
              [
                "GET",
                "Read a resource",
                "Yes",
                "Yes",
                "200 OK"
              ],
              [
                "POST",
                "Create or trigger",
                "No",
                "No",
                "201 Created / 202 Accepted"
              ],
              [
                "PUT",
                "Replace a resource",
                "No",
                "Yes",
                "200 OK / 201 Created"
              ],
              [
                "PATCH",
                "Partial update",
                "No",
                "Usually yes",
                "200 OK / 204 No Content"
              ],
              [
                "DELETE",
                "Remove a resource",
                "No",
                "Yes",
                "204 No Content / 200 OK"
              ],
              [
                "HEAD",
                "Metadata only",
                "Yes",
                "Yes",
                "200 OK"
              ],
              [
                "OPTIONS",
                "Supported methods",
                "Yes",
                "Yes",
                "204 No Content"
              ]
            ]
        }
      },
        {
        "heading": "GET \u2014 Read Only",
        "text": "GET retrieves data without changing server state. It is safe and idempotent, so caches can store it and clients can retry it freely. Never use GET for actions that mutate data."
      },
        {
        "heading": "POST \u2014 Create or Trigger",
        "text": "POST creates a sub-resource under a collection or triggers a process. It is not idempotent by default, meaning a retry can create duplicates. Use idempotency keys for payment, booking, or order endpoints."
      },
        {
        "heading": "PUT vs PATCH",
        "text": "PUT replaces the entire resource with the request body. PATCH applies a partial change. PUT is idempotent; PATCH is idempotent only if the patch document is deterministic.",
        "code": "// PUT replaces the whole address\nPUT /customers/42/address HTTP/1.1\n{\n  \"street\": \"456 Oak St\",\n  \"city\": \"Austin\",\n  \"state\": \"TX\",\n  \"zip\": \"78702\"\n}\n\n// PATCH changes only the zip\nPATCH /customers/42/address HTTP/1.1\n{\n  \"zip\": \"78703\"\n}",
        "language": "json"
      },
        {
        "heading": "DELETE",
        "text": "DELETE removes a resource. After the first successful delete, repeated calls should return 404 or 204. The resource stays deleted. Some APIs implement soft delete by updating a deletedAt field."
      },
        {
        "heading": "Idempotency Keys",
        "text": "For non-idempotent operations like POST, include an Idempotency-Key header. The server stores the response keyed by that header for a window (often 24 hours). Retries with the same key return the original response instead of creating a duplicate.",
        "code": "# Minimal idempotency store using Redis-like logic\nIDEMPOTENCY_TTL = 86400\n\ndef process_payment(request):\n    key = request.headers.get('Idempotency-Key')\n    if key:\n        cached = redis.get(f\"idempotency:{key}\")\n        if cached:\n            return cached  # replay stored response\n    result = charge_payment(request.body)\n    if key:\n        redis.setex(f\"idempotency:{key}\", IDEMPOTENCY_TTL, result)\n    return result",
        "language": "python"
      },
        {
        "heading": "Common Mistakes",
        "list": [
            "Using POST for everything instead of the right verb",
            "Making GET endpoints mutate state",
            "Treating PUT like PATCH and sending only changed fields",
            "Ignoring idempotency for money-affecting operations",
            "Returning 200 for a failed create instead of 400/422"
          ]
      }
      ]
  },
  "status-codes-and-errors": {
    "title": "Status Codes & Error Handling",
    "sections": [
        {
        "heading": "Why Status Codes Matter",
        "text": "HTTP status codes are the first signal a client receives. Using them correctly lets generic HTTP clients, middleware, and retry logic make smart decisions without parsing your body."
      },
        {
        "heading": "Status Code Families",
        "list": [
            "<strong>2xx Success:</strong> 200 OK, 201 Created, 202 Accepted, 204 No Content",
            "<strong>3xx Redirection:</strong> 301 Moved Permanently, 304 Not Modified",
            "<strong>4xx Client Error:</strong> 400, 401, 403, 404, 409, 410, 422, 429",
            "<strong>5xx Server Error:</strong> 500, 502, 503, 504"
          ]
      },
        {
        "heading": "Common Status Codes Explained",
        "table": {
          "headers": [
              "Code",
              "Meaning",
              "When to Use"
            ],
          "rows": [
              [
                "200 OK",
                "Success",
                "GET/PUT/PATCH succeeded"
              ],
              [
                "201 Created",
                "Resource created",
                "POST succeeded, return Location header"
              ],
              [
                "202 Accepted",
                "Accepted for async processing",
                "Long-running jobs submitted"
              ],
              [
                "204 No Content",
                "Success, no body",
                "DELETE or empty PATCH response"
              ],
              [
                "400 Bad Request",
                "Malformed request",
                "Invalid JSON, missing required field"
              ],
              [
                "401 Unauthorized",
                "Authentication required",
                "Missing or invalid credentials"
              ],
              [
                "403 Forbidden",
                "Not allowed",
                "Authenticated but lacking permission"
              ],
              [
                "404 Not Found",
                "Resource missing",
                "Unknown ID or path"
              ],
              [
                "409 Conflict",
                "State conflict",
                "Duplicate email, stale update"
              ],
              [
                "422 Unprocessable Entity",
                "Validation failed",
                "Syntax OK but semantics wrong"
              ],
              [
                "429 Too Many Requests",
                "Rate limited",
                "Return Retry-After header"
              ],
              [
                "500 Internal Server Error",
                "Unexpected failure",
                "Catch-all server error"
              ],
              [
                "503 Service Unavailable",
                "Temporarily down",
                "Maintenance or overload"
              ]
            ]
        }
      },
        {
        "heading": "Consistent Error Envelope",
        "text": "Every error response should follow the same JSON structure. Include a machine-readable code, a human-readable message, and pointers to the failing field when applicable.",
        "code": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n  \"error\": {\n    \"code\": \"INVALID_EMAIL\",\n    \"message\": \"The email address is not valid.\",\n    \"field\": \"email\",\n    \"request_id\": \"req_8f3a9b2c\",\n    \"documentation_url\": \"https://docs.example.com/errors/INVALID_EMAIL\"\n  }\n}",
        "language": "json"
      },
        {
        "heading": "Multiple Validation Errors",
        "text": "For forms with several invalid fields, return an array of errors so the UI can highlight every field at once.",
        "code": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": {\n    \"code\": \"VALIDATION_FAILED\",\n    \"message\": \"Multiple fields failed validation.\",\n    \"details\": [\n      { \"field\": \"email\", \"code\": \"INVALID_EMAIL\", \"message\": \"Not a valid email\" },\n      { \"field\": \"password\", \"code\": \"TOO_SHORT\", \"message\": \"Minimum 12 characters\" },\n      { \"field\": \"age\", \"code\": \"BELOW_MINIMUM\", \"message\": \"Must be at least 18\" }\n    ]\n  }\n}",
        "language": "json"
      },
        {
        "heading": "Error Design Best Practices",
        "list": [
            "Always return a JSON body for 4xx/5xx unless 204 is explicitly expected",
            "Include a request ID so support can trace the exact call",
            "Link to docs for every error code",
            "Do not expose stack traces or internal paths in production",
            "Use 401 only for authentication issues; use 403 for authorization issues"
          ]
      }
      ]
  },
  "request-response-design": {
    "title": "Request & Response Design",
    "sections": [
        {
        "heading": "Keep Payloads Clean",
        "text": "API payloads are contracts. Keep them minimal, predictable, and free of noise. Remove nulls, empty arrays, empty strings, and empty objects from responses unless they carry meaning."
      },
        {
        "heading": "Trimming Example",
        "code": "// BEFORE \u2014 noisy\n{\n  \"id\": \"ORD-1001\",\n  \"customer\": { \"id\": \"CUST-42\", \"name\": \"Alice\", \"email\": null, \"phone\": \"\" },\n  \"status\": \"shipped\",\n  \"discount\": null,\n  \"tags\": [],\n  \"notes\": \"\",\n  \"lineItems\": [{ \"productId\": \"PROD-11\", \"name\": \"Mouse\", \"qty\": 2 }]\n}\n\n// AFTER \u2014 clean\n{\n  \"id\": \"ORD-1001\",\n  \"customer\": { \"id\": \"CUST-42\", \"name\": \"Alice\" },\n  \"status\": \"shipped\",\n  \"lineItems\": [{ \"productId\": \"PROD-11\", \"name\": \"Mouse\", \"qty\": 2 }]\n}",
        "language": "json"
      },
        {
        "heading": "List vs Detail",
        "text": "A list endpoint should return summary fields only. A detail endpoint returns the full nested object. This avoids huge payloads and the AWS Lambda 6 MB response limit."
      },
        {
        "heading": "Sparse Fieldsets",
        "text": "Let clients request only the fields they need with a fields query parameter. This reduces payload size and improves performance on mobile networks.",
        "code": "GET /users?fields=id,name,email\n\n{\n  \"data\": [\n    { \"id\": \"u1\", \"name\": \"Alice\", \"email\": \"alice@example.com\" }\n  ]\n}",
        "language": "text"
      },
        {
        "heading": "Filtering and Sorting",
        "text": "Use query parameters for filtering, sorting, and searching. Keep operators simple and document them clearly.",
        "code": "GET /orders?status=paid&created_after=2026-01-01\nGET /orders?sort=-created_at&limit=20\nGET /products?price_min=10&price_max=100&category=electronics",
        "language": "text"
      },
        {
        "heading": "Envelope vs Raw Array",
        "text": "Wrap collection responses in an envelope. It gives room for pagination metadata, links, and future extensions without breaking clients.",
        "code": "GET /orders\n{\n  \"data\": [ ... ],\n  \"pagination\": {\n    \"next_cursor\": \"eyJpZCI6MTAwMX0\",\n    \"has_more\": true\n  }\n}",
        "language": "json"
      }
      ]
  },
  "pagination-and-filtering": {
    "title": "Pagination & Filtering",
    "sections": [
        {
        "heading": "Offset Pagination",
        "text": "Offset pagination uses page and limit parameters. It is easy to implement but performs poorly on large datasets because the database must scan and discard rows up to the offset.",
        "code": "GET /orders?page=3&limit=20\n\n{\n  \"data\": [ ... ],\n  \"pagination\": {\n    \"page\": 3,\n    \"limit\": 20,\n    \"total\": 1450\n  }\n}",
        "language": "json"
      },
        {
        "heading": "Cursor Pagination",
        "text": "Cursor pagination uses an opaque pointer to the last seen item. The next query asks for items after that cursor. It is stable under insertions and deletions and scales to billions of rows.",
        "code": "GET /orders?cursor=eyJpZCI6NTAwfQ&limit=20\n\n{\n  \"data\": [ ... ],\n  \"pagination\": {\n    \"next_cursor\": \"eyJpZCI6NTIwfQ\",\n    \"has_more\": true\n  }\n}",
        "language": "json"
      },
        {
        "heading": "Offset vs Cursor",
        "table": {
          "headers": [
              "Aspect",
              "Offset",
              "Cursor"
            ],
          "rows": [
              [
                "Implementation",
                "Easy",
                "Moderate"
              ],
              [
                "Performance at scale",
                "Poor",
                "Excellent"
              ],
              [
                "Stable results when data changes",
                "No \u2014 items shift",
                "Yes"
              ],
              [
                "Jump to arbitrary page",
                "Yes",
                "No"
              ],
              [
                "Use case",
                "Small datasets, admin UIs",
                "Feeds, timelines, large lists"
              ]
            ]
        }
      },
        {
        "heading": "Filtering Patterns",
        "list": [
            "Exact match: ?status=paid",
            "Range: ?created_after=2026-01-01&created_before=2026-06-01",
            "List: ?status=paid,pending",
            "Search: ?q=wireless+mouse",
            "Negation: ?status=!cancelled",
            "Sort: ?sort=-created_at (minus means descending)"
          ]
      }
      ]
  },
  "caching-and-performance": {
    "title": "Caching & Performance",
    "sections": [
        {
        "heading": "HTTP Caching Headers",
        "text": "Use Cache-Control to tell clients and intermediaries how long a response remains fresh. Combine with ETag for conditional requests so clients do not re-download unchanged data."
      },
        {
        "heading": "Cache-Control Directives",
        "list": [
            "Cache-Control: public, max-age=300 \u2014 safe to cache anywhere for 5 minutes",
            "Cache-Control: private, max-age=60 \u2014 only the browser may cache",
            "Cache-Control: no-store \u2014 never cache sensitive responses",
            "Cache-Control: must-revalidate \u2014 cache must revalidate before serving stale data"
          ]
      },
        {
        "heading": "ETag and Conditional Requests",
        "text": "An ETag is a fingerprint of a resource version. A client sends If-None-Match with the ETag; the server returns 304 Not Modified if unchanged.",
        "code": "GET /products/123 HTTP/1.1\nIf-None-Match: \"abc123\"\n\nHTTP/1.1 304 Not Modified\nCache-Control: max-age=300\nETag: \"abc123\"",
        "language": "http"
      },
        {
        "heading": "Optimistic Concurrency with If-Match",
        "text": "Use If-Match on PUT/PATCH to prevent lost updates. If the resource changed since the client read it, the server returns 409 Conflict.",
        "code": "PATCH /orders/1001 HTTP/1.1\nIf-Match: \"etag-abc123\"\nContent-Type: application/json\n{ \"status\": \"shipped\" }\n\nHTTP/1.1 409 Conflict\n{ \"error\": { \"code\": \"RESOURCE_MODIFIED\", \"message\": \"Order was modified by another client.\" } }",
        "language": "http"
      }
      ]
  },
  "security-and-authentication": {
    "title": "Security & Authentication",
    "sections": [
        {
        "heading": "Authentication Patterns",
        "list": [
            "<strong>API keys:</strong> Simple for server-to-server calls; include in Authorization header, not query string",
            "<strong>OAuth 2.0:</strong> Industry standard for delegated access; use scopes to limit permissions",
            "<strong>JWT tokens:</strong> Self-contained signed tokens; keep lifetimes short and rotate refresh tokens",
            "<strong>mTLS:</strong> Mutual TLS for service-to-service authentication inside a private network"
          ]
      },
        {
        "heading": "Authorization Header Examples",
        "code": "GET /orders HTTP/1.1\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n# Server-to-server\nGET /internal/metrics HTTP/1.1\nAuthorization: ApiKey sk_live_1234567890abcdef",
        "language": "http"
      },
        {
        "heading": "CORS",
        "text": "Cross-Origin Resource Sharing controls which browser origins can call your API. Never use * for authenticated endpoints. Preflight OPTIONS requests are required for PUT, PATCH, DELETE, and custom headers.",
        "code": "Access-Control-Allow-Origin: https://app.example.com\nAccess-Control-Allow-Methods: GET, POST, PATCH, DELETE\nAccess-Control-Allow-Headers: Authorization, Content-Type, X-Idempotency-Key",
        "language": "http"
      },
        {
        "heading": "Rate Limiting",
        "text": "Return 429 Too Many Requests with Retry-After and rate-limit headers. This protects your API and gives clients clear feedback.",
        "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 60\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 1721234567\n\n{ \"error\": { \"code\": \"RATE_LIMITED\", \"message\": \"Quota exceeded. Retry after 60 seconds.\" } }",
        "language": "http"
      },
        {
        "heading": "Security Checklist",
        "list": [
            "Use HTTPS everywhere in production",
            "Validate and sanitize all input on the server",
            "Do not trust client-side validation alone",
            "Store secrets in headers or environment variables, never in URLs",
            "Hash and rotate API keys; support key revocation",
            "Use least-privilege OAuth scopes",
            "Log authentication failures for anomaly detection",
            "Set reasonable request and payload size limits"
          ]
      }
      ]
  },
  "versioning-and-evolution": {
    "title": "Versioning & Evolution",
    "sections": [
        {
        "heading": "Versioning Strategies",
        "text": "Never deploy a v1 API without a versioning plan. The most common strategies are URL path versioning, header versioning, and content negotiation. URL path versioning is the easiest to discover and cache."
      },
        {
        "heading": "Versioning Comparison",
        "table": {
          "headers": [
              "Strategy",
              "Example",
              "Pros",
              "Cons"
            ],
          "rows": [
              [
                "URL path",
                "/v1/orders",
                "Easy to see and cache",
                "Can clutter URLs"
              ],
              [
                "Header",
                "X-API-Version: v1",
                "Clean URLs",
                "Harder to discover"
              ],
              [
                "Content negotiation",
                "Accept: application/vnd.api.v1+json",
                "Pure REST",
                "Caching complex"
              ]
            ]
        }
      },
        {
        "heading": "Deprecation Policy",
        "text": "When you need to make a breaking change, release a new version and give clients time to migrate. Use Sunset and Deprecation headers to communicate timelines.",
        "code": "Deprecation: true\nSunset: Sat, 31 Dec 2026 23:59:59 GMT\nLink: </v2/customers>; rel=\"successor-version\"",
        "language": "http"
      },
        {
        "heading": "Breaking vs Non-Breaking Changes",
        "list": [
            "<strong>Breaking:</strong> Removing a field, changing a field type, removing an endpoint, changing status codes",
            "<strong>Non-breaking:</strong> Adding optional fields, adding new endpoints, adding new query params, expanding an enum",
            "Always add new fields as optional; never repurpose existing fields"
          ]
      }
      ]
  },
  "api-contracts-and-docs": {
    "title": "API Contracts & Documentation",
    "sections": [
        {
        "heading": "OpenAPI / Swagger",
        "text": "OpenAPI is the industry standard for describing REST APIs. A single YAML or JSON document defines paths, methods, parameters, request bodies, responses, authentication, and examples. From this document you can generate interactive docs, client SDKs, and server stubs."
      },
        {
        "heading": "Minimal OpenAPI Snippet",
        "code": "openapi: 3.0.3\ninfo:\n  title: Orders API\n  version: 1.0.0\npaths:\n  /orders:\n    get:\n      summary: List orders\n      parameters:\n        - name: status\n          in: query\n          schema:\n            type: string\n            enum: [pending, paid, shipped]\n      responses:\n        '200':\n          description: List of orders\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/OrderList'\n    post:\n      summary: Create an order\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/NewOrder'\n      responses:\n        '201':\n          description: Created\n          headers:\n            Location:\n              schema:\n                type: string",
        "language": "yaml"
      },
        {
        "heading": "Contract-First vs Code-First",
        "table": {
          "headers": [
              "Approach",
              "Best For"
            ],
          "rows": [
              [
                "Contract-first",
                "Teams that need stable interfaces, multiple consumers, generated SDKs"
              ],
              [
                "Code-first",
                "Rapid prototyping, single team, annotations auto-generate OpenAPI"
              ]
            ]
        }
      },
        {
        "heading": "Documentation Best Practices",
        "list": [
            "Provide an interactive sandbox like Swagger UI or Stoplight Elements",
            "Include realistic request and response examples",
            "Document every error code and how to fix it",
            "Explain rate limits and authentication clearly",
            "Keep docs versioned alongside the API"
          ]
      }
      ]
  },
  "advanced-rest-patterns": {
    "title": "Advanced REST Patterns",
    "sections": [
        {
        "heading": "Asynchronous Operations (202 Accepted)",
        "text": "For long-running work, do not block the client. Return 202 Accepted with a Location header pointing to a status endpoint. The client polls the status until completion."
      },
        {
        "heading": "Async Job Flow",
        "code": "POST /reports/monthly HTTP/1.1\nAuthorization: Bearer ...\n\nHTTP/1.1 202 Accepted\nLocation: /jobs/job_98765\n\n--- poll ---\nGET /jobs/job_98765 HTTP/1.1\n\nHTTP/1.1 200 OK\n{\n  \"id\": \"job_98765\",\n  \"status\": \"running\",\n  \"progress\": 45,\n  \"result_url\": null\n}",
        "language": "http"
      },
        {
        "heading": "Bulk Operations",
        "text": "Use a dedicated collection or action endpoint for bulk work. Return per-item results so callers know which items succeeded or failed.",
        "code": "POST /products/bulk-delete\n{\n  \"ids\": [\"p1\", \"p2\", \"p3\"]\n}\n\n{\n  \"succeeded\": [\"p1\", \"p2\"],\n  \"failed\": [\n    { \"id\": \"p3\", \"error\": { \"code\": \"NOT_FOUND\", \"message\": \"Product does not exist\" } }\n  ]\n}",
        "language": "json"
      },
        {
        "heading": "Webhooks for Event Delivery",
        "text": "When clients need real-time updates, push events to their HTTPS endpoint instead of forcing them to poll. Sign webhooks with HMAC and allow retries with exponential backoff.",
        "list": [
            "Deliver events as HTTP POST with a structured payload",
            "Include an event ID so clients can deduplicate",
            "Sign with a shared secret (Stripe-Signature style)",
            "Retry on 5xx and certain 4xx codes; stop retrying on success",
            "Let clients register and rotate webhook URLs via an API"
          ]
      },
        {
        "heading": "HATEOAS",
        "text": "Hypermedia as the Engine of Application State adds links to responses so clients can discover next actions without hardcoding URLs.",
        "code": "{\n  \"id\": \"ORD-1001\",\n  \"status\": \"paid\",\n  \"_links\": {\n    \"self\": { \"href\": \"/v1/orders/ORD-1001\" },\n    \"customer\": { \"href\": \"/v1/customers/CUST-42\" },\n    \"refund\": { \"href\": \"/v1/orders/ORD-1001/refund\", \"method\": \"POST\" },\n    \"invoice\": { \"href\": \"/v1/invoices/INV-77\" }\n  }\n}",
        "language": "json"
      },
        {
        "heading": "Search Endpoints",
        "text": "For complex search, use a dedicated /search resource with a query language or structured body. Keep simple filters on the collection endpoint; move full-text and faceted search to /search.",
        "code": "POST /products/search\n{\n  \"query\": \"wireless mouse\",\n  \"filters\": { \"category\": \"electronics\", \"price_max\": 100 },\n  \"sort\": { \"field\": \"rating\", \"order\": \"desc\" },\n  \"pagination\": { \"cursor\": null, \"limit\": 20 }\n}",
        "language": "json"
      }
      ]
  },
  "industry-examples": {
    "title": "Real-World Examples",
    "sections": [
        {
        "heading": "Stripe",
        "text": "Stripe uses URL path versioning (/v1/charges), idempotency keys for safe retries, cursor pagination, and expandable fields (?expand=customer). Errors include a request ID, error code, and doc URL."
      },
        {
        "heading": "GitHub",
        "text": "GitHub's REST API uses ETag-based conditional requests, rate-limit headers, and link headers for pagination (rel=next, rel=last). It returns 304 when nothing changed and 410 for removed resources."
      },
        {
        "heading": "Shopify",
        "text": "Shopify versions its Admin API by date (/admin/api/2024-07/orders.json) and sunsets old versions on a predictable schedule. This gives merchants and app developers a stable migration window."
      },
        {
        "heading": "Twitter/X API v2",
        "text": "The v2 API uses field selection (?fields=...) to reduce over-fetching and supports expansions to pull related data in one request. Pagination uses next_token cursors."
      },
        {
        "heading": "What to Borrow",
        "list": [
            "Stripe: idempotency keys, error format, expandable fields",
            "GitHub: ETags, link headers, rate-limit headers",
            "Shopify: date-based versioning, predictable sunset policy",
            "Twitter/X: field selection, cursor pagination, expansions"
          ]
      }
      ]
  },
  "recap-and-practice": {
    "title": "Recap & Practice",
    "sections": [
        {
        "heading": "Quick Recap",
        "list": [
            "Design around resources and use plural nouns in URLs",
            "Use HTTP verbs consistently; make mutating operations idempotent where possible",
            "Return proper status codes and consistent error envelopes",
            "Use cursor pagination for large datasets",
            "Cache with Cache-Control and ETag",
            "Authenticate with OAuth2/JWT/API keys and enforce CORS",
            "Version early and deprecate gracefully",
            "Document with OpenAPI and provide realistic examples",
            "Use 202 Accepted, webhooks, and HATEOAS for advanced flows"
          ]
      },
        {
        "heading": "Practice Questions",
        "list": [
            "Q1: Why should you use plural nouns like /orders instead of /order? \u2192 Consistency, natural collection semantics, and predictable URLs.",
            "Q2: How do you prevent duplicate charges on a retry? \u2192 Use an Idempotency-Key header and replay the stored response.",
            "Q3: When is cursor pagination better than offset pagination? \u2192 Large datasets, high-churn feeds, and when stable iteration matters.",
            "Q4: What headers should you include for rate limiting? \u2192 429 status, Retry-After, X-RateLimit-Remaining, X-RateLimit-Reset.",
            "Q5: How do you handle a long-running export request? \u2192 Return 202 Accepted with a Location header to a job status endpoint.",
            "Q6: What is HATEOAS and why use it? \u2192 Including links in responses so clients can discover actions without hardcoding URLs."
          ]
      },
        {
        "heading": "Common Mistakes",
        "list": [
            "Putting verbs in URLs: /getUser instead of GET /users/42",
            "Returning 200 OK for validation errors",
            "Using POST for idempotent updates instead of PUT/PATCH",
            "Exposing stack traces or internal paths in error bodies",
            "Ignoring versioning until a breaking change is forced",
            "Returning giant nested payloads from list endpoints"
          ]
      }
      ]
  }
};
