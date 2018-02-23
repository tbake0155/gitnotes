# GitNotes
Footnote / reference type extension for GitHub. Developed as part of the HU6 challenge.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Patrick Cox** - *Contributor* - [paddy74](https://github.com/paddy74)
* **Claus Othersen** - *Contributor* - [Cothersen](https://github.com/Cothersen)
* **Katrine Gausin** - *Contributor* - [kgausin](https://github.com/kgausin)
* **Timothy Baker** - *Contributor* - [tbake0155](https://github.com/tbake0155)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE V3 License - see the [LICENSE.md](LICENSE.md) file for details

## Purpose

This project is a Chrome browser extension that allows a user to add comments to a github project without cluttering the code with inline comments.

In order to use the plug-in a user must create an attributes file in the root of the repository for their project.   The attributes file should be named "gitnotes.json" and is a hidden file.  The file is a text file in UTF8 format.  Entries in the attributes file should be entered one at a time as follows:

#ENTRY#  
FILENAME</br>
CODE</br>
DOCUMENTATION</br>
MEDIA</br>

Where 
    FILENAME is the name of the currently browsed code file
    CODE is a string matching the code to be documented
    DOCUMENTATION is a string that will be displayed in a tooltip
    MEDIA is a html rerference (local or external) to media (optional*)

If no MEDIA html reference is to be provided, it is necessary to include a /# symbol in place of the html reference.
