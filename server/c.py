# import csv

# # with open('data.csv', 'w', newline='') as csvfile:
# #     spamwriter = csv.writer(csvfile, delimiter=' ',
# #                             quotechar='|', quoting=csv.QUOTE_MINIMAL)
# #     spamwriter.writerow(['Spam'] * 5 + ['Baked Beans'])
# #     spamwriter.writerow(['Spam', 'Lovely Spam', 'Wonderful Spam'])

# with open('data.csv', newline='') as csvfile:
#     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
#     for row in spamreader:
#         print(', '.join(row))

import pandas as pd


df = pd.read_csv('data.csv')

for i, v in df.iterrows():
    print(v)

# print(df)