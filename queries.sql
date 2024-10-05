CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Primary key with auto-generated UUID
    user_id VARCHAR(255),
    full_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,             -- Unique constraint on email
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Default current time for created_at
    customer_id VARCHAR(255),
    price_id VARCHAR(255),
    status VARCHAR(50)
);

CREATE TABLE payment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Primary key with auto-generated UUID
    amount INTEGER NOT NULL,                        -- Amount for the payment (integer)
    status VARCHAR(255) NOT NULL,                   -- Payment status (e.g., completed, pending)
    stripe_payment_id VARCHAR(255) NOT NULL,        -- Payment ID from Stripe
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Creation timestamp with default as current time
);

CREATE TABLE posts (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),  -- Primary key with auto-generated UUID
    title VARCHAR(255) NOT NULL,                            -- Title of the post
    content TEXT NOT NULL,                                  -- Content of the post
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP          -- Timestamp for when the post is created, defaulting to current time
);