/* eslint-disable */
import $ from 'jquery'
import { showAd } from './ad.js'

if (showAd()) {
  window.coinzilla_display = window.coinzilla_display || []
  var c_display_preferences = {}
  c_display_preferences.zone = '26660bf627543e46851'
  c_display_preferences.width = '728'
  c_display_preferences.height = '90'
  window.coinzilla_display.push(c_display_preferences)
  $('.ad-container').show()
} else {
  $('.ad-container').hide()
}
