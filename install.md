## Installation  

### Install npm on major Linux distros  
Use the appropriate command on your distribution to install npm. On some distributions, npm is installed along with the nodejs package. On others, the two packages are installed separately. The following commands will install both npm and Node.js. Feel free to omit the nodejs package when applicable, but most distributions will install it automatically as a dependency.  

#### To install npm on Ubuntu, Debian, and Linux Mint:  
```bash
$ sudo apt install npm
OR
$ sudo apt install npm nodejs
```  

#### To install npm on CentOS 8 (and newer), Fedora, and Red Hat:
```bash
$ sudo dnf install npm	# also installs nodejs  
```  

#### To install npm on CentOS 6 and 7, and older versions of Red Hat:  
```bash
$ sudo yum install epel-release
$ sudo yum install npm # also installs nodejs  
```  

#### To install npm on Arch Linux and Manjaro:
```bash
$ sudo pacman -S npm # also installs nodejs
```  

####  To install npm on OpenSUSE:
```bash
$ sudo zypper install npm # also installs nodejs
```  
Once npm is installed, you can begin using it to install or remove JavaScript packages from your system. Check the section below for some common npm commands.  

### Basic usage commands for npm   
Here’s a list of the various npm commands you’ll likely need to know:  

####  To see the version of npm and verify it’s installed on the system:  
```bash
$ npm --version
```  

####  To install a package:
```bash
$ npm install package-name
```

####  To remove a package:
```bash
$ npm uninstall package-name
```

####  To search for a particular package:
```bash
$ npm search package-name
```

####  To see what packages are installed on your system:
```bash
$ npm ls
```

####  To access the help menu and see a full list of available npm commands:
```bash
$ npm help
```
These are the all commands you’ll use when installing and removing packages, as well as searching for them by name. Check the npm help command output for further instructions, as there’s a lot more npm can do.