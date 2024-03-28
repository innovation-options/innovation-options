# Core
AUTHOR = 'David Binetti'
SITENAME = 'Innovation Options'
SITEURL = "http://localhost:8000"
PATH = "content"
TIMEZONE = 'America/Boise'
DEFAULT_LANG = 'en'

# Feeds
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Basic
DELETE_OUTPUT_DIRECTORY = True


MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

STATIC_PATHS = [
    'images',
]

PAGE_EXCLUDES = STATIC_PATHS


DEFAULT_PAGINATION = False

PLUGINS = [
    'plugins.bootstrapify',
]

PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

AUTHOR_URL = ""
AUTHOR_SAVE_AS = ""

TAG_URL = ""
TAG_SAVE_AS = ""

THEME = 'themes/bootstrap'


TEMPLATE_PAGES = {
    'calculator.html': 'calculator.html',
    'articles.html': 'articles.html',
}
