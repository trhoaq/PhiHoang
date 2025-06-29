#level 2 dfd 

flowchart TD
    subgraph Người dùng
        A[App/Web (Giao diện người dùng)]
    end

    subgraph API Gateway + Lambda
        B[Amazon API Gateway]
        C[AWS Lambda (Xử lý nghiệp vụ)]
    end

    subgraph ML/LLM
        D[SageMaker (Khuyến nghị ML)]
        E[Amazon Bedrock (LLM + RAG)]
        F[Kendra (Search)]
    end

    subgraph Dữ liệu & Tri thức
        G[DynamoDB (Hồ sơ, Giao dịch)]
        H[S3 (Tin tức, Nội dung RAG)]
    end

    subgraph Tính năng mở rộng
        I[Recommendation System (6 Hũ + Mục tiêu)]
        J[Gamification (Streak + Milestone)]
        K[Amazon SNS/Pinpoint (Thông báo đẩy)]
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
