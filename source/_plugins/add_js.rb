module Jekyll
  class AddJavaScript < Liquid::Tag

    def initialize(tag_name, url, tokens)
      super
      @url = url.strip
    end

    def render(context)
      "<script type=\"text/javascript\" src=\"#{@url}\"></script>"
    end
  end
end

Liquid::Template.register_tag('add_js', Jekyll::AddJavaScript)