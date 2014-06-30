# You should edit this file with the browsers you wish to use
# For options, check out http://saucelabs.com/docs/platforms
if ENV['RUN_ON_SAUCE']
  require "sauce"
  require "sauce/capybara"
  Sauce.config do |c|
    c[:name] = 'Automated test'
    c[:start_tunnel] = true
    c[:start_local_application] = false
    c[:application_host] = ENV['DOMAIN_NAME']
    c[:application_port] = 4000
    c[:browsers] = [
        ["OSX 10.6", "Firefox", 17],
        ["Windows 7", "Opera", 10],
        ["Windows 7", "Firefox", 20]
      ]
  end
end