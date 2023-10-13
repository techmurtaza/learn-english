# WordyWonder

## English-Hindi Vocabulary Builder

A web application built with React, Laravel, and Tailwind CSS to help users learn and test their knowledge on English-Hindi translations.

## Features

- **Words Viewer**:
  - Displays a paginated list of English words along with their Hindi translations.
  - Users can navigate through different pages to explore more words.
- **Quiz Section**:
  - Users can test their understanding by attempting a quiz.
  - The quiz consists of multiple-choice questions where users have to match the English word to its Hindi translation or vice versa.
  - The number of questions is customizable between 10 to 50.
  - After completing the quiz, users can view their score along with the correct answers.

## Getting Started

### Prerequisites

- PHP >= 8.0
- Composer
- Node.js
- A MySQL Database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/murtuzz/WordyWonder.git
   cd vocab-builder
   ```
2. Install Composer dependencies:
   ```bash
   composer install
   ```
3. Install NPM dependencies:
   ```bash
   npm install
   ```
4. Copy the `.env.example` file to a new file named `.env` and update the database connection details:
   ```bash
   cp .env.example .env
   ```
5. Generate an application key:
   ```bash
   php artisan key:generate
   ```
6. Run the database migrations and seeders:
   ```bash
   php artisan migrate --seed
   ```
7. Compile the frontend assets:
   ```bash
   npm run dev
   ```
8. Serve the application:
   ```bash
   php artisan serve
   ```

Now, you can access the application at `http://127.0.0.1:8000`.

## Usage

- Navigate to the `/words` route to view the words list.
- Navigate to the `/questions` route to access the quiz section.

## Contributing

Feel free to fork the project, make changes, and submit pull requests. All contributions are welcome.

## License

This project is open-source and is licensed under the MIT License. 