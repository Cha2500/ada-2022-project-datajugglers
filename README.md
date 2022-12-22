# Networking in the movie insustry : a key to success ?

![header](image/image_ADA.png)

## Study of the influence of actors network on their career evolution

How do actors become famous ? Is it only thanks to their skills ? Did their career explode once they played with an actor whose movies are already well recieved by the critics ? In this study, we aim to assess whether there is a link between an actor's network and his "score", where an actor score is characterized by the mean of the movie ratings he played in. For the purpose of our investigation, we construct a graph that can change over time, where nodes are actors and edges represent the fact that two actors play in a movie together. We study around 40 000 movies taken from [CMU Movie Summary Corpus](http://www.cs.cmu.edu/~ark/personas/), and use an additional dataset taken from [IMDb](https://datasets.imdbws.com/) in order to get the ratings of those movies. We study the actor's network evolution from 1980 to 2010, and analyze the interactions between the actors. 

### Why movie ratings as an actor's "success" scale ? 

We wanted to find a way to quantify how much an actor is successful in his carreer. We decided that a successful actor is an actor that plays in movies considered good by the public, which can be assessed thanks to the movie ratings. Then, an actor "success" is defined as the weighted average of their precedent movies, and the current one. Below, you can see the distribution of the movies rating, which looks like a normal distribution, centered in 6. 

![rating](image/distribution_rates.png)

### Graph construction and analysis

First, the graph of all the actors and movies have to be made. The graph is built from movies between 1980  and 2010. It is an undirected graph, since if one actor plays with another in a movie, it is always reciprocal.

| number of nodes | number of edges |  
|:----------------|:----------------|
|  75276          | 1225697         | 

The average node degree of our graph is equal to $\frac{2E}{N} = \frac{2*75276}{1225697} = 32$, which is quite a lot. 

![node_degree](image/node_degree.png)

The node degree distribution is heavy tailed, with some actors that played with much more actors, so surely in much more movies than others.





### With how many actors do an actor play in average ? 



### How does the neighbourhood closeness change over time ? 

This site was built using [this github repository](https://github.com/epfl-ada/ada-2022-project-datajugglers/tree/master)

