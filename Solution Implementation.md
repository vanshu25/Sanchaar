The implementation of project took pace in two parts: Extension development and building of Machine Learning model. Let's learn about them both in brief!

<img src="https://www.marketing91.com/wp-content/uploads/2020/11/Project-Implementation.jpg" width="400" height="300" />

* Javascript, html, and CSS is used to adjust the appearance of the extension. The main file of the extension is the 'manifest.json', it includes the version, name, description and decides extension's web authority.
* 'popup.js' and 'popup.html' decides the appearance of the extension, that is what users will see when they click the extension on the web and 'detect.js' will call other files to detect the camera and open it.


* For the Computer Vision tasks, we used Microsoft Azure services. The dataset that we used here is a subset which we created from MS-ASL dataset, as proposed in MS-ASL: A Large-Scale Data Set and Benchmark for Understanding American Sign Language paper. This dataset originally consists of clips of 1000 words in ASL(American Sign Language). 
* We performed data labelling in Azure and then we used Computer Vision services by Azure for training our model.
<img src="https://www.marketing91.com/wp-content/uploads/2020/11/Project-Implementation.jpg" width="400" height="300" />
* Then we wrote some code in python to call this model and make predictions.
Input image:
<img src="https://www.marketing91.com/wp-content/uploads/2020/11/Project-Implementation.jpg" width="400" height="300" />
Output image:
<img src="https://www.marketing91.com/wp-content/uploads/2020/11/Project-Implementation.jpg" width="400" height="300" />
 


