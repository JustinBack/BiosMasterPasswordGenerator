  Password generator for BIOS
================================

Continued fork of bacher09's abandoned repo!

[![travis status][build-status]][travis]
[![coverage here][coverage-status]][coverage]

This project contains master password generators for various BIOS/UEFI firmware.
For more info [read this][dogbert-post].

Latest released version available [here][bios-pw] and latest testing version (*synchronized with master branch*) [here][beta-bios-pw].

## Supported BIOS types:

* Asus &mdash; current BIOS date. For example: ``01-02-2013``
* Compaq &mdash; 5 decimal digits (*e.g*. ``12345``)
* Dell	&mdash; supports such series: ``595B``, ``D35B``, ``2A7B``, ``A95B``, ``1D3B``, ``6FF1`` and ``1F66``. *e.g*: ``1234567-2A7B`` or ``1234567890A-D35B`` for HDD.
* Fujitsu-Siemens &mdash; 5 decimal digits, 8 hexadecimal digits, 5x4 hexadecimal digits, 5x4 decimal digits
* Hewlett-Packard &mdash; 5 decimal digits, 10 characters
* Insyde H20 (Acer, HP) &mdash; 8 decimal digits
* Phoenix (generic) &mdash; 5 decimal digits
* Sony &mdash; 7 digit serial number
* Samsung &mdash; 12 hexadecimal digits

## Installation/Compile

1. Clone the repository
2. cd pwgen-for-bios && npm install
3. npm run webpack

## More info

* http://dogber1.blogspot.com/2009/05/table-of-reverse-engineered-bios.html
* https://sites.google.com/site/hpglserv/Home/article

## Thanks

* [asyncritius](https://github.com/A-syncritus) &mdash; for major contribution to dell generator
* [dogbert](https://github.com/dogbert) &mdash; researched most of generators present here
* hpgl &mdash; for dell generator
* [bacher09](https://github.com/bacher09) &mdash; for the original repo
[build-status]: https://api.travis-ci.org/JustinBack/BiosMasterPasswordGenerator.svg?branch=master
[travis]: https://travis-ci.org/JustinBack/BiosMasterPasswordGenerator
[coverage-status]: https://coveralls.io/repos/github/JustinBack/BiosMasterPasswordGenerator/badge.svg?branch=master
[coverage]: https://coveralls.io/github/JustinBack/BiosMasterPasswordGenerator?branch=master
[dogbert-post]: http://dogber1.blogspot.com/2009/05/table-of-reverse-engineered-bios.html
[bios-pw]: https://beta.pixelcatproductions.net/
[beta-bios-pw]: https://beta.pixelcatproductions.net/unstable
