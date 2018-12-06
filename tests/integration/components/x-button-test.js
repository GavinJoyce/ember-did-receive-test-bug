import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('name', 'Alex');
    await render(hbs`{{x-button name=name}}`);

    assert.equal(this.element.textContent.trim(), '[X-BUTTON: UPDATED]');
  });
});
