Piccolo introduces a new **IBM Cloud Development** concept page. The intent is to advertise what we do, how cool we are, and showcase our teams to job candidates and visitors of our public-facing website.

## Local Deployment

Below is a quick "how to" for cloning, installing, and running Piccolo locally.

### Prerequisites

Piccolo requires __Ruby 1.9.3__ at minimum. [Click here](http://www.ruby-lang.org/en/installation) to download and install Ruby. If you have Ruby, but aren’t sure which version, run `ruby -v`.

### Clone and Install

Run the following commands.

    $ git clone -b gh-pages https://github.com/caleorourke/piccolo.git
    $ cd piccolo
    $ gem install bundler
    $ bundle install

## Serve Mode

Run `jekyll serve` to preview Piccolo. Once it starts, open up a browser and type `localhost:4000` for the web address.

### Watch Option

Run `jekyll serve --watch` if you want to monitor changes while applying code updates.

### Stopping Serve Mode

Serve mode lasts forever. Press `CTRL+C` to stop the service.

## License

Code and documentation licensed under the terms of the MIT License.
