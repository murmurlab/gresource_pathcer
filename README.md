#[Article](https://github.com/murmurlab/gresource_pathcer/tree/master/)
# .gresource pathcer

**.gresource pathcer** for modifying / editing a gresource file
###**usage**:
 execute
 ```bash
 sh extract.sh path/to/file.gresource
 ```
files be extracted to directory `files/`
like:
files/
--org/
----gnome/
------theme/
------gtk.css
------gtk-dark.css
------assets/
--------header-entry.png

after making your changes (eg. gtk.css) execute
```bash
sh build.sh
```
to build the gresources file



# GRESOURCE Extractor for customizing login themes

Run `./extract.sh` to extract your current theme to `./files` in the same folder as the extract script.

#### Editing the font

Edit `gnome-shell.css`. Change the font to your custom font. E.g:

```css
stage {
  font-family: 'Source Sans Pro', Sans-Serif;
  font-size: 14px;
  color: #eeeeec;
}
```

#### Editing the background

Copy a background to the theme folder. Then edit `gnome-shell.css` and change the `#lockDialogGroup` section to the filename of your image. E.g:

```css
#lockDialogGroup {
  background: #2e3436 url(resource:///org/gnome/shell/theme/background.jpg);
  background-size: cover;
  background-repeat: none;
}
```

#### Overriding the logo (Fedora)

On some distributions, such as fedora, there is a logo on the bottom of the login screen. Try the following after moving a logo image to the theme folder:

```css
.login-dialog-logo-bin {
  padding: 24px 0px; 
  background: url(resource:///org/gnome/shell/theme/logo.png);
  background-repeat:no-repeat;
}
```

#### Building & enabling

Run the `./build.sh` file. This will create a `.gresource` file in the theme folder.

Finally, override the current gresource **(make sure you have backed up the current file)**:

```bash
sudo mv gnome-shell-theme.gresource /usr/share/gnome-shell/gnome-shell-theme.gresource
```
