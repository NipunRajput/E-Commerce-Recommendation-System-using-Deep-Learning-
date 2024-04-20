# E-Commerce-Recommendation-System-using-Deep-Learning
Project methodolgy
Dataset has been taken from kaggle, the shape of data is (189874, 5).
First the data has been catergorized in respected buckets.
That are:

household
electronics
baby
automotive
arts & crafts
clothing
beauty & personal care
books
sports & outdoors
tools & home improvement
health
toys & games

After that we focus on the column named "Summary".
We will apply NLP techniques for pre processing: coverting the text to lower case, removing white spaces and non-words, removing digits, then applying tokenization and removing stopwords.

After which we train a model called Nayes bayes on the column "Summary" to calculate the sentiments(1 for postive and 0 for negative ).

Now what we observed that there were more 180000+ rows but the uniques items were only 812, We calculated Average_sentiment breacuse we have multiple reviews for a single product.
Finally, We created a user interface which will take the input for the category and the needs of the user and will provide recommenadtion.
for recommendation, We used LSTM.
