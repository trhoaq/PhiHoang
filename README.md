# DFD Level 2 - Hệ thống AI Finance Coaching (AWS)

```mermaid
flowchart TD
    subgraph Người dùng
        A[App/Web\n(Giao diện người dùng)]
    end

    subgraph API Gateway + Lambda
        B[Amazon API Gateway]
        C[AWS Lambda\n(Xử lý nghiệp vụ)]
    end

    subgraph ML/LLM
        D[SageMaker\n(Khuyến nghị ML)]
        E[Amazon Bedrock\n(LLM + RAG)]
        F[Kendra\n(Search)]
    end

    subgraph Dữ liệu & Tri thức
        G[DynamoDB\n(Hồ sơ, Giao dịch)]
        H[S3\n(Tin tức, Nội dung RAG)]
    end

    subgraph Tính năng mở rộng
        I[Recommendation System\n6 Hũ + Mục tiêu]
        J[Gamification\nStreak + Milestone]
        K[Amazon SNS/Pinpoint\n(Thông báo đẩy)]
    end

    A --> B
    B --> C
    C --> G
    C --> D
    C --> E
    C --> F
    C --> H

    D --> I
    E --> I
    H --> F
    I --> J
    I --> K
    J --> A
    K --> A
