გამოყენებულია ორი API ნიუ იორკ ტაიმსის ბესტსელერების - https://developer.nytimes.com/docs/books-product/1/overview
და ღია ბიბლიოთეკის წიგნების API https://openlibrary.org/dev/docs/api/search

არის 5 ფეიჯი, როუტინგი ხდება რეაქტ როუტერით.

პირველი ფეიჯი არის ჰოუმ ფეიჯი სადაც უბრალოდ ცოტაოდენი ტექსტი და ორი ღილაკია რომელსაც სხვადასხვა ფეიჯზე გადაყავხარ

![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/4562609f-daff-4d7f-bb62-305cd8a9722c)


შემდეგ არის ტოპ სელერების ჟანრის ფეიჯი სადაც ბესტსელერების API-დან მოდის სხვადასხვა ჟანრები.

![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/7aa8c506-6e6c-4735-8410-9af6eeefb2a6)


ჟანრაზე დაჭერის შემდეგ გადადის დინამიურ ფეიჯზე სადაც გამოსახულია უშუალოდ ტოპ სელერი წიგნები ამ ჟანრის.

![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/a941c85e-dacc-4615-8dc1-c7e164bb3179)

ეს წიგნები დალაგებულია რანკის მიხედვით, არის ცოტა ინფორმაცია მათზე გამოსახული და გვაქ სამი ღილაკი რომლებიც ანიმირებულები არიან framer motion-ით.
პირველი ღილაკის დაჭერისას იხსნება მოდალი სადაც არის მეტი ამ წიგნის ყდა და მეტი ინფორმაცია გამოსახული, მოდალის გამოჩენაც ანიმირებულია framer motion-ით, აქ დამჭირდა მეორე OpenLibrary api-ს გამოყენება რადგან პირველი api- წიგნის ყდას და სხვა ინფორმაციას არ აბრუნებდა.


![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/c9790d89-6e72-4716-9b9e-748b9713ff4c)


მეორე ღილაკს უბრალოდ გადავყავართ ამ წიგნის შესაძენ ამაზონის ფეიჯზე.
მესამე ვარსკვლავის ღილაკი კი არის favourite-ში დამატება. მასზე დაჭერის შემთხვევაში იგი ყვითლდება და შესაბამისი წიგნის ინფორმაცია მატდება custom hook-ის დახმარებით localstorage-ში.
![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/78e9666b-367b-4a03-ace5-82af838ce9af)


localstorage-ში შენახული წიგნები გამოისახება Favorites ფეიჯზე. ვარსკვლავზე დაკლიკებისას იშლება საყვარელი წიგნების ლისტიდან.
![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/ca8da5a5-7477-49ba-be4a-53736270170e)

ბოლო ფეიჯი აირს Advanced Search ფეიჯი სადაც არის ფორმა react hook forms-გამოყენებით და ვალიდაცია ხდება yup-ის დახმარებით.
ამ ფეიჯზე შეიძლება ავტორის, სათაურის, უნიკალური კოდის, ფაბლიშერის ან მათი სხვადასხვა კომბინაციის შეყვანით წიგნების მოძებნა.

![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/9ba9d9fb-cb61-4692-8998-10717dbeb7ea)

ვალიდაცია ხდება ISBN კოდის სადაც ან ცარიელი უნდა იყოს ინპუტი ან უნდა იყოს 10 ან 13 სიგრძის ციფრი.



საიტი არის რესფონსივი, გამოყენებულია ბუთსთრაფი და ათვირთულია Netlify-ზე https://merabkardavareactfinal.netlify.app/

კეთებისას აღმოვაჩინე რომ new york times API-ს უფასო ვერსიას ძალიან დაბალი რექვესთის ლიმიტი აქ ამიტომ სხვადასხვა ადგილას ქეშირების ლოგიკა მაქ დამატებბული რომ ყოველ ჯერზე ჩატვირთვა არ მოუწიოს, ამისდა მიუხედავად ზოგჯერ მაინც იჭედება.

საიტზე ასევე სპინერი ლოუდერები მაქ დამატებული სანამ ჩაიტვირთება
![image](https://github.com/MerabQardava/ReactFinal/assets/73705286/4963198b-923a-4288-a5fc-2ee58b92ac9a)


მოგნი ყველა მოთხოვნა დაკმაყოფილებული მაქ :).











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
