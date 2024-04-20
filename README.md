# E-Commerce-Recommendation-System-using-Deep-Learning
Project methodolgy
1) Data Preprocessing:
        You've collected a dataset from Kaggle containing around 189,874 entries with 5 columns.
        Categorized the data into different buckets like household, electronics, baby, etc.
        Focused on the "Summary" column for analysis.
2) NLP Techniques for Preprocessing:
        Lowercasing the text, removing white spaces and non-words, and eliminating digits to clean the text data.
        Applied tokenization to split the text into individual words.
        Removed stopwords to filter out common words that don't carry much meaning.

3) Sentiment Analysis with Naive Bayes:
        Trained a Naive Bayes model on the "Summary" column to calculate sentiment scores (1 for positive and 0 for negative).
        Handled multiple reviews for a single product by calculating average sentiment.

4) User Interface Development:
        Created a user interface to interact with the recommendation system.
        Takes input from the user regarding the category and their needs/preferences.

5) Recommendation Algorithm (LSTM):
        Utilized LSTM (Long Short-Term Memory) model for generating recommendations.
        LSTM is a type of recurrent neural network (RNN) that is well-suited for sequence prediction tasks, making it suitable for recommendation systems where there's a sequence of interactions or behaviors 
        to learn from.
