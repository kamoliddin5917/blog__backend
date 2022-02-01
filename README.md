# Website created by Kamoliddin Jamoliddinov

# URL

https://kamoliddin-blog.herokuapp.com

# token shart bo'lmaganlari

# GET

1. url/v1/api/home - users va blogs

# POST

1. url/v1/auth/register - body: { firstName, lastName, email, password, conPassword }
2. url/v1/auth/login - body: { email, password }

# token shart bo'lganlari

# token headersdan jo'natilishi kerak

# GET

1. url/v1/api/user/{userId} - tanlangan user va uning blogs

# POST

1. url/v1/api/blog - body: { title, content, tags }
2. url/v1/api/comment - body: { content, blogId }

# DELETE

1. url/v1/api/blog/{blogId}
