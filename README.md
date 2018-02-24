# GitNotes

This project is a Chrome browser extension that allows a user to add comments to a github project without cluttering the code with inline comments.

## USE

In order to use the plug-in a user must create a gitnotes folder in the chosen repository.  The folder must be named as such ".gitnotes".  Inside the hidden gitnotes folder a user must include a text file named "notes".  The notes file is a text file in UTF8 format.  Entries in the notes file should be entered one at a time as follows:

```
#ENTRY#  
FILENAME
CODE
DOCUMENTATION
MEDIA
REFERENCE
```

Where 
    FILENAME is the name of the currently browsed code file.
    CODE is a string matching the code to be documented.
    DOCUMENTATION is a string that will be displayed in a tooltip.
    MEDIA is a external or internal link (RAW) to an image.
    REFERENCE is a local or external reference to media (optional).
    
    
If no MEDIA html reference is to be provided, it is necessary to include a /# symbol in place of the html reference.  Users may add images or html pages to their gitnotes folder and then link those files raw pages from github to allow a user to view media hosted in the gitnotes folder.

NOTE: The #ENTRY# line must exist as the first line for each entry!  There are no spacing requirements between entries but each entry will always exactly take up 5 lines.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/tbake0155/gitnotes/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/tbake0155/gitnotes/tags). 

## Authors

* **Timothy Baker** - *Contributor* - [tbake0155](https://github.com/tbake0155)
* **Patrick Cox** - *Contributor* - [paddy74](https://github.com/paddy74)
* **Katrine Gausin** - *Contributor* - [kgausin](https://github.com/kgausin)
* **Claus Othersen** - *Contributor* - [Cothersen](https://github.com/Cothersen)

See also the list of [contributors](https://github.com/tbake0155/gitnotes/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
