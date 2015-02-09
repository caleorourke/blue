# Plum

**Products. Engineering. Quality. Community.**

Plum introduces a new **IBM Cloud** page. The intent is to advertise what we do, how cool we are, and publicly showcase our teams to job candidates and visitors of our public-facing website.

## Local Preview

Below is a quick "how to" for cloning, installing, and running Plum locally.

### Prerequisites

Plum requires __Ruby 1.9.3__ at minimum. [Click here](http://www.ruby-lang.org/en/installation) to download and install Ruby. If you have Ruby, but aren’t sure which version, run `ruby -v`.

### Clone and Install

Run the following commands.

    $ git clone -b gh-pages https://github.com/caleorourke/plum.git
    $ cd plum
    $ gem install bundler
    $ bundle install

### Serving

Run `jekyll serve` to preview Plum locally. Once Jekyll starts, fire up a browser and type `localhost:4000/prototype` for the web address.

#### Watch Option

Run `jekyll serve --watch` to monitor changes and apply updates.

#### Killing Jekyll

Serve mode lasts forever. Press `CTRL+C` to stop the service.
