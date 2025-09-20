import test, { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly headerElements;
  readonly pageElements;

  constructor(page: Page) {
    this.page = page;
    this.headerElements = [
      {
        locator: (page) => page.locator('.home'),
        name: 'Home',
        text: 'Home',
        attribute: {
          type: 'href',
          value: '/',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Projects', exact: true }),
        name: 'Projects',
        text: 'Projects',
        attribute: {
          type: 'href',
          value: '/projects',
        },
      },
      {
        locator: (page) => page.locator('.help'),
        name: 'Help',
        text: 'Help',
        attribute: {
          type: 'href',
          value: 'https://www.redmine.org/guide',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Sign in' }),
        name: 'Sign in',
        text: 'Sign in',
        attribute: {
          type: 'href',
          value: '/login',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Register' }),
        name: 'Register',
        text: 'Register',
        attribute: {
          type: 'href',
          value: '/account/register',
        },
      },
      {
        locator: (page) =>
          page
            .locator('h1')
            .filter({ hasText: /^Redmine$/ })
            .locator('span'),
        text: 'Redmine',
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Search' }),
        name: 'Search',
        text: 'Search',
        attribute: {
          type: 'href',
          value: '/projects/redmine/search?scope=subprojects',
        },
      },
      {
        locator: (page) => page.getByRole('textbox', { name: 'Search:' }),
        name: 'Search',
      },
      {
        locator: (page) => page.locator('#project-jump').getByText('Redmine'),
        text: 'Redmine',
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Overview' }),
        name: 'Overview',
        text: 'Overview',
        attribute: {
          type: 'href',
          value: '/projects/redmine',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Download' }),
        name: 'Download',
        text: 'Download',
        attribute: {
          type: 'href',
          value: '/projects/redmine/wiki/Download',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Activity' }),
        name: 'Activity',
        text: 'Activity',
        attribute: {
          type: 'href',
          value: '/projects/redmine/activity',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Roadmap' }),
        name: 'Roadmap',
        text: 'Roadmap',
        attribute: {
          type: 'href',
          value: '/projects/redmine/roadmap',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Issues' }),
        name: 'Issues',
        text: 'Issues',
        attribute: {
          type: 'href',
          value: '/projects/redmine/issues',
        },
      },
      {
        locator: (page) => page.locator('#main-menu').getByRole('link', { name: 'News' }),
        name: 'News',
        text: 'News',
        attribute: {
          type: 'href',
          value: '/projects/redmine/news',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Wiki', exact: true }),
        name: 'Wiki',
        text: 'Wiki',
        attribute: {
          type: 'href',
          value: '/projects/redmine/wiki',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Forums', exact: true }),
        name: 'Forums',
        text: 'Forums',
        attribute: {
          type: 'href',
          value: '/projects/redmine/boards',
        },
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Repository' }),
        name: 'Repository',
        text: 'Repository',
        attribute: {
          type: 'href',
          value: '/projects/redmine/repository',
        },
      },
    ];
    this.pageElements = [
      {
        locator: (page) => page.locator('.current-project'),
        text: 'Redmine',
      },
      {
        locator: (page) => page.getByRole('link', { name: 'Multiple projects support' }),
        name: 'Multiple projects support',
        text: 'Multiple projects support',
        attribute: {
          type: 'href',
          value: '/projects/redmine/wiki/RedmineProjects',
        },
      },
    ];
  }
  async openMainPage() {
    await this.page.goto('https://www.redmine.org/');
  }
  async checkHeaderElementsVisibility() {
    this.headerElements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    });
  }
  async checkHeaderElementsText() {
    this.headerElements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Проверка названия элемента ${name}`, async () => {
          await expect.soft(locator(this.page)).toContainText(text);
        });
      }
    });
  }
  async checkHeaderElementsLinks() {
    this.headerElements.forEach(({ locator, name, attribute }) => {
      if (attribute) {
        test.step(`Проверка атрибутов href элемента ${name}`, async () => {
          await expect.soft(locator(this.page)).toHaveAttribute(attribute?.type, attribute?.value);
        });
      }
    });
  }
  async checkOtherElementsVisibility() {
    this.pageElements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    });
  }
  async checkOtherElementsText() {
    this.pageElements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Проверка названия элемента ${name}`, async () => {
          await expect.soft(locator(this.page)).toContainText(text);
        });
      }
    });
  }
  async checkOtherElementsLinks() {
    this.pageElements.forEach(({ locator, name, attribute }) => {
      if (attribute) {
        test.step(`Проверка атрибутов href элемента ${name}`, async () => {
          await expect.soft(locator(this.page)).toHaveAttribute(attribute?.type, attribute?.value);
        });
      }
    });
  }
}
