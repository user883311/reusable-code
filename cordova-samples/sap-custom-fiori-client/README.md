#Customized SAP Fiori Mobile Client Sample
[With over 500+ role-based apps SAP solutions](http://go.microsoft.com/fwlink/?LinkID=691659), such as SAP S/4HANA, SAP Simple Finance, and the SAP Business Suite are applying the [SAP Fiori UX](http://experience.sap.com/fiori-design/) to provide a personalized, responsive and simple user experience.

Custom Fiori clients allow you to extend these base features and brand your Fiori client, add additional device capabilities by with Cordova plugins, remove plugins you do not intend to use to reduce your app’s size, and even add additional code packaged with the client app to meet your own specific needs (such as customizing your offline experience). 

The [SAP Mobile SDK](http://go.microsoft.com/fwlink/?LinkID=691667) enables developers to integrate a number of different technology platforms and Cordova enablement is provided through provided [Kapsel SDK](http://go.microsoft.com/fwlink/?LinkID=691662). The Kapsel SDK contains a [set of Cordova plugins](http://go.microsoft.com/fwlink/?LinkID=691664) that you can add to your own Cordova project. In addition, the SDK provides a script to generate a Custom Fiori Client project.

You can build and edit these apps in Visual Studio [Tools for Apache Cordova](http://go.microsoft.com/fwlink/?LinkId=398477) or [VS Code](http://go.microsoft.com/fwlink/?LinkID=691671) and the [TACO CLI](http://go.microsoft.com/fwlink/?LinkID=691672) in a few simple steps.

##Building the Custom Fiori Mobile Client Sample

###Before You Begin

1. First, if you intend to build an Android version of your app on Windows you will need to install and configure some dependencies:

	1. Be sure to install the **Android Support Repository**, **Android Support Library**, **Google Play services**, and **Google Repository** under extras via the Android SDK Manager (Typically you'll need to run "C:\Program Files (x86)\Android\android-sdk\SDK Manager.exe" as Administrator to make changes.)

	2. Install a version of the Windows **[64-bit JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)** and set your JAVA_HOME environment variable to its location. When using Visual Studio, you should update **Tools &gt; Options &gt; Tools for Apache Cordova &gt; Environment Variable Overrides** to this same location.
	 
	3. Bump up your Java heap to 1500M - the 512M default is not enough. To do so, set an environment variable of **_JAVA_OPTIONS=-Xmx1500M**. 
	
	4. Restart your computer.

2. Next, download the **SAP Mobile SDK 3.0 SP 10 along with hotfix 5 (SP10_5)** (or a [free trial from the SAP Store](http://go.microsoft.com/fwlink/?LinkID=691663)) and install it on your machine.

3. At this point you may [build a Custom Fiori Mobile Client in VS or VS Code](#custom) or simply [add SAP plugins to your Cordova project](#plugins).

<a name="custom"></a>
###Building a Custom Fiori Client Using VS or VS Code

1. First, place the **taco_create.js** and the **lib** folder in the **KapselSDK/apps/fiori_client** folder where you installed the SAP Mobile SDK

2. Next, **[follow the instructions on SAP's site](http://go.microsoft.com/fwlink/?LinkID=691661)** or (simply follow the instructions in README.md in the fiori_client folder) to configure the client generation script in this folder but type **node taco_create.js** instead of create_fiori_client.js. Summary:

	1. Install **[Node.js 0.12.x](https://nodejs.org/download/release/v0.12.7/)** and version **5.2.0** of the Cordova CLI. (npm install -g cordova@5.2.0)

	2. Update config.json in the KapselSDK\apps\fiori_client folder with your package name / ID, target folder for the project, app name, and platforms. Only Android and iOS are currently supported with Windows coming soon. Note that targetFolder must be a **relative path** not absolute.
	
	3. Type "npm install" from this folder 
	
	4. Run "node taco_create.js" from this same locaiton. Like create_fiori_client.js, the script will take some time to execute.

		> This script first runs create_fiori_client.js and then copies a few files that are placed inside the "platforms" folder directly by the Fiori client script into the main project so the platforms folder does not need to be added to source control and for improved iOS compatibility when remotely building from Windows.

3. **Visual Studio:** 
	1. At this point you can install Visual Studio 2015, select the Tools for Apache Cordova option. **Be sure you are running at least Tools for Apache Cordova Update 4.**
	2. Next, simply open the project in Visual Studio using the **File &gt; New &gt; Project From Existing Code...** option. 
	3. Be aware that your first build in particular will take quite a while given the project contains around 43mb of plugin code that needs to be compiled.

4. **VS Code or other Text Editor:** Follow these steps:
	1. Install the [taco-cli](http://go.microsoft.com/fwlink/?LinkID=691672) and use it to help you install any pre-requisites
	2. Simply open the folder containing your project in VS code or your text editor and start editing!  Use the taco-cli to build and run your app as appropriate!
	3. Be aware that your first build in particular will take quite a while given the project contains around 43mb of plugin code that needs to be compiled.

5. When building or targeting iOS, take note of suggested workarounds for [common challenges when building for iOS with Xcode 7 and with Cordova 5.3.3 and below](http://go.microsoft.com/fwlink/?LinkID=691679).  **Some of these are pre-applied by the script.**

<a name="plugins"></a>
##Add SAP Plugins to a Custom Cordova App 
If you would prefer to use SAP plugins without the Custom Fiori Client script, you can do that too by following these steps:

1. Download [samples/.cordova/config.json](http://go.microsoft.com/fwlink/?LinkID=691677). **Note: Download, do not cut and paste from the web.** Copying from the web can result in unexpected characters in the file that can cause Cordova errors.
2. Place it in a **.cordova** folder in the root of your project
3. Update the path in this file to point to your SAP KapselSDK plugins folder (Ex: "C:\\SAP\\KapselSDK\\plugins").
4. You may now add plugins from the "plugins" folder of the Kapsel SDK using the "Custom" tab in the config.xml designer.  API documentation can be found [on SAP's website](http://go.microsoft.com/fwlink/?LinkID=691664).

## FAQ

**Q: The build failed with "cmd: Command failed with exit code 2" in VS. What is wrong?** <br />
A: Look through the contents of the Output window. You are likely encountering one of the issues below.

**Q: The build failed and the Output window or terminal output mentions "> Could not resolve all dependencies for configuration ':_armv7DebugCompile'" or a similar error. What is wrong?"** <br />
A: This generally means you do not have Android Support Repository, Android Support Library, Google Play services, or Google Repository under extras installed via the Android SDK Manager. Be sure they're installed as described above.

**Q: The build failed and the Output window or terminal output mentions "Could not start java virtual machine" or an "Out of memory" error. How do I fix this?** <br />
A: You'll need to use a 64-bit JDK and set the heap to 1500M. See "Before You Begin" for details.

**Q: The build fails with a "Your JAVA_HOME is invalid error" in the Output window or terminal output but the JAVA_HOME path looks valid. How do I fix this?** <br />
A: Update to a fresh copy of the [64-bit JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and follow the instructions in "Before You Begin" above. Corrupted installs and path conflicts for the JDK can cause this error and a fresh install of 64-bit JDK 8 typically resolves the issue. You should also restart your machine to ensure the JDK installation has completed and all settings take effect.

**Q: I am running into errors about certain plugins not being found or installing incorrectly. How do I fix this?** <br />
Be sure you've installed hotfix 5 of mobile SDK SP 10 (SP10_5) as some plugin names have changed that can cause conflicts with earlier versions. Moving to hotfix 5 is the best way to ensure the sample works, but removing the conflicting &lt;vs:plugin&gt; elements in config.xml may also resolve the issue (Right Click > View Code in VS).

## Known Issues
- Ripple cannot be used to simulate a Custom Fiori Client. Custom Fiori Clients make use of quite a few custom Cordova plugins, so you will want to be sure to pick an Android or iOS device or emulator / simulator target when debugging your app.
- SAP recommends Cordova 5.2.0 for use with the Kapsel SDK in Mobile SDK 3.0 SP10 and as a result this sample uses 5.2.0 as well. However, there are some known issues with 5.2.0 to be aware of:  
	- Cordova 5.2.0 only works with [Node.js 0.12.7](https://nodejs.org/download/release/v0.12.7/) and below. There are known issues with both Node.js 4.x.x for iOS and with Node.js 5.0.0+ for all platforms.  See [known issues for more details](http://go.microsoft.com/fwlink/?LinkID=618471).
	- Cordova 5.3.3 and below have known incompatibilities with Xcode 7 that can be resolved with some workarounds. Some workarounds are applied in this sample, but [see known issues for more details](http://go.microsoft.com/fwlink/?LinkID=691679).
- Windows and Windows Phone 8.0 are not supported by the Custom Fiori Client creation script today

## Terms of Use
By downloading and running this project, you agree to the license terms of the third party application software, Microsoft products, and components to be installed. 

The third party software and products are provided to you by third parties. You are responsible for reading and accepting the relevant license terms for all software that will be installed. Microsoft grants you no rights to third party software.

## License
```
The MIT License (MIT)

Copyright (c) Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Help us improve our samples
Help us improve out samples by sending us a pull-request or opening a [GitHub Issue](https://github.com/Microsoft/cordova-samples/issues/new)

## More Information
Email us at multidevicehybridapp@microsoft.com
