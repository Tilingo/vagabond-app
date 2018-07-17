City.destroy_all
Post.destroy_all
User.destroy_all

katia = User.create(name: 'Katia', current_city: 'Atlanta', email: 'katia@email.com', password: '1234', profile_picture: 'http://esi-energy.com/wp-content/wverrors.php?getimage=aHR0cDovL2Qxd215Yjd4ZWt0NmgwLmNsb3VkZnJvbnQubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzLzA4MTUwODAwL0NocmlzdGluYS1SZWVkLTE3OC1iZy5qcGc=', last_name: 'Ramirez')

# atlanta = City.create(name: 'Atlanta', photo_url: 'https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000')

# katia.cities.find_by(name: 'Atlanta').posts.create(title: 'Amazing city', content: 'Thank you to the City of Atlanta for brining me the greatest happiness over the past 4 years. I came here to attend school at Emory University and fell in love with the city. Atlanta is such a great place, especially for young people. From the Beltline to the many weekend festivals, there is so much to do and explore; so many fun and delicious restaurants. I hope to have the opportunity to live here again. If anyone considers moving to Atlanta, they should not hesitate.')
