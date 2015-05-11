## Limelight

Limelight is a **SoftLayer Development** concept page that advertises what we do, how cool we are, and showcases our teams to job candidates and visitors. It's designed specifically for hosting on GitHub using GitHub Pages and can be served up locally using Jekyll.

## Local Deployment

Below is a quick "how to" for cloning, installing, and running Limelight locally.

### Prerequisites

Limelight requires the latest, stable Ruby packages for the following versions: 

* Ruby 2.0.0 (p643)
* Ruby 2.1.5
* Ruby 2.2.1

[Click here](http://www.ruby-lang.org/en/downloads) to download and install Ruby. 

> If you have Ruby, but aren’t sure which version, run `ruby -v`.

### Clone and Install

Run the following commands.

    $ git clone -b gh-pages https://github.com/caleorourke/limelight.git
    $ cd limelight
    $ gem install bundler
    $ bundle install

### Serve Mode

Run `jekyll serve` to preview Limelight. Once it starts, open up a browser and type `localhost:4000` for the web address.

#### Watch Option

Run `jekyll serve --watch` if you want to monitor changes while applying code updates.

#### Stopping Serve Mode

Serve mode lasts forever. Press `CTRL+C` to stop the service.

## License

Code and documentation licensed under the terms of the MIT License.
