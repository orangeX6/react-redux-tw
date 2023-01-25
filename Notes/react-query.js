/*


# ⎛⎝(•‿•)⎠⎞
# SECTION 1 - CREATING QUERIES AND LOADING / ERROR STATES
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 1. Introduction to React Query
# 2. Introduction to this Course
# 3. IMPORTANT: React Query version 3 vs. version 4
# 4. First project: Blog-em Ipsum
# 5. TROUBLESHOOTING: create-react-app and React Query 4.10+
# 6. Creating Queries with useQuery
# 7. (optional) TROUBLESHOOTING: Node v. 17 and above
# 8. Handling Loading and Error States
# 9. React Query Dev Tools
# 10. staleTime vs cacheTime
_  ###############################################
# 1. Introduction to React Query

-> Client state - Information relevant to browser session
>> example - user's chosen language or theme

-> Server State - Information stored on server
>> eg - blog post data stored on db

_ REACT QUERY
>> What problem does React Query Solve?
=> React Query maintains cache of server data on client
-> When your react code needs data from the server, it doesn't go straight to the server using fetch or axios, instead it asks React Query cache. And React Query's job is to maintain the data in that cache based on how you configured the react query client. 

=> React Query Manages Data 
-> react Query manages the data and it is your job to indicate when you want to update the cache with new data from the server. 

=> When to update cache?
-> indicate when to update cache with new data from server
  _ Imperatively - you can imperatively invalidate Data and ask react to fetch new data
  _ Declaratively - Configure how(eg. on window focus) and when to trigger a re-fetch
    >> you can use staleTime to set time after which if the window is refocused we should update data
  
  * Example react query obj syntax
    # key: 'blog-posts'
    # data: [
    #     1: {
    #       title: 'React Query',
    #       tagLine: 'What is this thing?'
    #   },
    #   2: {
    #     title:'React Query Mutations',
    #     tagLine: 'Not just for ninja turtles'
    #   }
    # ]
    # staleTime: 30 seconds

  => React Query comes with a lot of other tools to help you with the server state management
  _ LOADING / ERROR STATES
  -> It maintains loading and error states for every query to the server

  _ PAGINATION / INFINITE SCROLL
  -> It gives you tools to fetch data in pieces just when its needed by the user for the pagination / infinite scroll

  _ PREFETCHING
  >> You can prefetch data if you anticipate that the users' going to need it
  -> So you can prefetch the data then put it into cache and then when the user does need the data your app can draw the data from the cache and the user doesn't have to wait for you to contact the server

  _ MUTATIONS
  -> React Query can also manage mutations or updates of data on the server

  _ DE_DUPLICATION OF REQUESTS
  -> Since Queries are identified by the key, react query can manage your requests, so that if you load the page and several components on that page request the same data, react query can send the query only once. 
  -> And if another component requests the data while the original query is going out, then react query can de-duplicate the requests.
  
  _ RETRY ON ERROR
  -> React query can also manage retries if you get an error from the server

  _ CALLBACKS
  -> And it provides callbacks so that you can take actions if your query is successful, if it returns an error. or you can provide a callback to take an action in either case.



  # 10. staleTime vs cacheTime
  _ STATE DATA 
  -> Data refetch only triggers for stale data.
      >> For example, component remount, window focus
      >> staleTime translates to "max age"
      -> staleTime makes data stale after specified number of milliseconds.
      -> By default ReactQuery's staleTime is 0ms

  _ WHY IS STALE TIME 0MS BY DEFAULT?
  -> The explanation is quite simple -
  => "How is the data on the screen always up to date?"
  -> is a much better question to be asking than
  => "Why is my data not updating?!"
  - Tanner Linsley, creator of React Query

  _ staleTime vs cacheTime
  -> staleTime is for re-fetching
  => Cache is for data that might be re-used later
      >> query goes into "cold storage" if there is no active useQuery
  =>> cache data expires after the configured cacheTime(default : Five Minutes)
      >> The amount of time that the cache time is observing is since how long it has been since useQuery has been active
  => After the cache expires the data is garbage collected
  => Cache is backup data to display while fetching
  ? Its better to show data which is slightly out of date while you are fetching new data than not to show anything at all



  
# ⎛⎝(•‿•)⎠⎞

# SECTION 1 - CREATING QUERIES AND LOADING / ERROR STATES
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 11. Intro to Code Quizzes
# 12. Code Quiz! Create Query for Blog Comments
# 13. Query Keys
# 14. Pagination
# 15. Pre-fetching Data
# 16. isLoading vs isFetching
# 17. Intro to Mutations
# 18. Delete Post with useMutation
# 19. Code Quiz! Mutation to Update Post Title
# 20. Summary: React Query Basics
_  ###############################################
# 14. Pagination
-> Track current page in component state 
(currentPage)
-> Use query keys that include the page number 
["posts", currentPage]
-> User clicks "next page" or "previous page" button
      >> Update currentPage state
      >> fire off new query

# 15. Pre-fetching Data
-> PreFetch
=>> Adds data to cache
=>> automatically stale(configurable)
=>> shows while re-fetching
      -> as long as cache hasn't expired
=>> Prefetching can be used for any anticipated data needs
      -> Not just pagination
_  https://tanstack.com/query/v4/docs/react/reference/QueryClient#queryclientprefetchquery


# 16. isLoading vs isFetching
_ isFetching 
      -> The async query function hasn't yet resolved

_ isLoading
      -> no cached data + isFetching
  
# 17. Intro to Mutations
=> Mutations: 
-> Making a network call that changes data on the server

_ useMutation
=>> Similar to useQuery, but
      -> Returns mutate function
      -> doesn't need query key
      -> isLoading but no isFetching
      -> by default, no retries(configurable)
_ https://tanstack.com/query/v4/docs/react/reference/useMutation



*/
