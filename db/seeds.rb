City.destroy_all
User.destroy_all
Post.destroy_all

user = User.create(name: 'John', 
    last_name: "Doe",
    profile_picture: 'https://www.instituteofhypnotherapy.com/wp-content/uploads/2016/01/tutor-8.jpg',
    email: 'johndoe@email.com',
    current_city: 'Atlanta')

atlanta = City.create(name: 'Atlanta', photo_url: 'https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000')


atlanta.posts.create(title: 'Amazin city', content: 'Thank you to the City of Atlanta for brining me the greatest happiness over the past 4 years. I came here to attend school at Emory University and fell in love with the city. Atlanta is such a great place, especially for young people. From the Beltline to the many weekend festivals, there is so much to do and explore; so many fun and delicious restaurants. I hope to have the opportunity to live here again. If anyone considers moving to Atlanta, they should not hesitate.')
