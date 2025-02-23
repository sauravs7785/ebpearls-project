CREATE DATABASE your_database;

USE your_database;

-- Task Manager Table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

-- Contact Form Table
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(100),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Outsource Payment Posts Table
CREATE TABLE outsource_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    icon VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Insert some dummy posts
INSERT INTO outsource_posts (icon, title, description) VALUES
('💰', 'Access up to $10,000', 'We provide fast funding to support your cash flow.'),
('📄', 'Choose invoices to get paid', 'Select which invoices you want to receive early payments for.'),
('💳', 'Simple pricing', 'No hidden fees—what you see is what you get.');
