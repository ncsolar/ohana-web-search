require 'spec_helper'

# Checks for the search results summary
feature 'Search summary', :vcr, :sauce => ENV["RUN_ON_SAUCE"] do

  scenario 'when visiting search results page that has results' do
    search_for_maceo
    # Expect only static and floating search results summary,
    # and expect that they're only in the results-header.
    expect(all('.search-summary', :text=>'Displaying 1 result').count).to eq(1)
    expect(all('.results-header .search-summary', :text=>'Displaying 1 result').count).to eq(1)
  end

  scenario 'when visiting search results page that does not have results' do
    search_for_no_results
    # Expect only static and floating search results summary,
    # and expect that they're only in the results-header.
    expect(all('.search-summary', :text=>'No results').count).to eq(1)
    expect(all('.results-header .search-summary', :text=>'No results').count).to eq(1)
  end

end
