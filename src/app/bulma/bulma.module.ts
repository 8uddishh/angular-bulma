import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  BulmaContainerComponent,
  BulmaContainerFluidDirective,
  BulmaContainerFullHdDirective,
  BulmaContainerWideScreedDirective
} from './layout';
import {
  BulmaButtonDirective,
  BulmaPrimaryDirective,
  BulmaInfoDirective,
  BulmaLinkDirective,
  BulmaDangerDirective,
  BulmaSuccessDirective,
  BulmaWarningDirective,
  BulmaClearFixDirective,
  BulmaClippedDirective,
  BulmaInvisibleDirective,
  BulmaMarginlessDirective,
  BulmaOverlayDirective,
  BulmaPaddinglessDirective,
  BulmaPullLeftDirective,
  BulmaPullRightDirective,
  BulmaRadiuslessDirective,
  BulmaShadowlessDirective,
  BulmaSrOnlyDirective,
  BulmaUnselectableDirective
} from './modifiers';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    BulmaContainerComponent,
    BulmaContainerFluidDirective,
    BulmaContainerFullHdDirective,
    BulmaContainerWideScreedDirective,
    BulmaButtonDirective,
    BulmaPrimaryDirective,
    BulmaInfoDirective,
    BulmaLinkDirective,
    BulmaDangerDirective,
    BulmaSuccessDirective,
    BulmaWarningDirective,
    BulmaClearFixDirective,
    BulmaClippedDirective,
    BulmaInvisibleDirective,
    BulmaMarginlessDirective,
    BulmaOverlayDirective,
    BulmaPaddinglessDirective,
    BulmaPullLeftDirective,
    BulmaPullRightDirective,
    BulmaRadiuslessDirective,
    BulmaShadowlessDirective,
    BulmaSrOnlyDirective,
    BulmaUnselectableDirective
  ],
  exports: [
    BulmaContainerComponent,
    BulmaContainerFluidDirective,
    BulmaContainerFullHdDirective,
    BulmaContainerWideScreedDirective,
    BulmaButtonDirective,
    BulmaPrimaryDirective,
    BulmaInfoDirective,
    BulmaLinkDirective,
    BulmaDangerDirective,
    BulmaSuccessDirective,
    BulmaWarningDirective,
    BulmaClearFixDirective,
    BulmaClippedDirective,
    BulmaInvisibleDirective,
    BulmaMarginlessDirective,
    BulmaOverlayDirective,
    BulmaPaddinglessDirective,
    BulmaPullLeftDirective,
    BulmaPullRightDirective,
    BulmaRadiuslessDirective,
    BulmaShadowlessDirective,
    BulmaSrOnlyDirective,
    BulmaUnselectableDirective
  ]
})
export class BulmaModule {}
