source 'https://rubygems.org'

ruby '2.1.3'
gem 'rails', '~> 4.1.6'

# FRONT END

# Use SCSS for stylesheets.
gem 'sass-rails', '~> 4.0.3'

# Compass tools for use with SCSS.
gem 'compass-rails', '~> 2.0.0'

# Font-awesome icons.
gem 'font-awesome-rails'

# Use Uglifier as compressor for JavaScript assets.
gem 'uglifier'

# For enabling requirejs-style AMD scripts in the asset pipeline.
gem 'requirejs-rails', '~> 0.9.2'

# For HAML HTML view templates.
gem 'haml-rails', '~> 0.5.3'

# SERVER

gem 'unicorn'
gem 'ohanakapa', '~> 1.1.1'
gem 'faraday-http-cache', '~> 0.4.0'

# Caching
gem 'rack-cache', '~> 1.2'
gem 'dalli', '~> 2.7.1'
gem 'memcachier'

# Required for caching in production.
gem 'kgio'

# URL redirects.
gem 'rack-rewrite', '~> 1.5.0'

# For Google translation API.
gem 'google-api-client', '~> 0.7.1'

# App config and ENV variables for heroku.
gem 'figaro', '~> 1.0.0.rc1'

# Handles logic behind Pagination UI component.
gem 'kaminari'

group :production, :staging do
  # Enables serving assets in production and setting logger to standard out.
  gem 'rails_12factor'
end

# dev and debugging tools
group :development do
  gem 'quiet_assets', '~> 1.0.2'
  gem 'better_errors', '~> 1.1.0'
  gem 'binding_of_caller', '~> 0.7.2', platforms: [:mri_19, :rbx]

  # For mocking emails for sending.
  gem 'letter_opener', '~> 1.2.0'

  # For linting JS with `rake jshint`.
  gem 'jshintrb'

  # For code documentation, run `yard --help` for list of commands.
  gem 'yard'

  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'listen', '~> 1.0'
end

group :test do
  gem 'coveralls', require: false
  gem 'capybara', '~> 2.4.1'
  gem 'poltergeist'
  gem 'vcr', '~> 2.9.0'
  gem 'webmock', '~> 1.18.0'
  gem 'email_spec', '~> 1.6.0'
  gem 'haml-lint'

  # Ruby static code analyzer, based on the community Ruby style guide.
  gem 'rubocop'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0.0'
end
