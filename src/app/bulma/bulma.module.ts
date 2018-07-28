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
  BulmaUnselectableDirective,
  BulmaBlockDirective,
  BulmaFlexDesktopOnlyDirective,
  BulmaFlexDirective,
  BulmaFlexMobileDirective,
  BulmaFlexTabletOnlyDirective,
  BulmaFlexWidescreenOnlyDirective,
  BulmaInlineBlockDirective,
  BulmaInlineDirective,
  BulmaInlineFlexDirective,
  BulmaFlexDesktopDirective,
  BulmaFlexFullHdDirective,
  BulmaFlexTabletDirective,
  BulmaFlexTouchDirective,
  BulmaFlexWidescreenDirective,
  BulmaHiddenDesktopOnlyDirective,
  BulmaHiddenMobileDirective,
  BulmaHiddenTabletOnlyDirective,
  BulmaHiddenWidescreenOnlyDirective,
  BulmaHiddenDesktopDirective,
  BulmaHiddenFullHdirective,
  BulmaHiddenTabletDirective,
  BulmaHiddenTouchDirective,
  BulmaHiddenWidescreenDirective,
  BulmaTextColorDirective,
  BulmaBackgroundColorDirective,
  BulmaTextCenteredDirective,
  BulmaTextJustifiedDirective,
  BulmaTextLeftDirective,
  BulmaTextRightDirective,
  BulmaTextSizeDirective,
  BulmaUppercaseDirective,
  BulmaCapitalizedDirective,
  BulmaItalicDirective,
  BulmaLowercaseDirective,
  BulmaTextWeightBoldDirective,
  BulmaTextWeightLightDirective,
  BulmaTextWeightNormalDirective,
  BulmaTextWeightSemiboldDirective
} from './modifiers';

import {
  BulmaColumnComponent,
  BulmaColumnsComponent,
  BulmaColumnEightDirective,
  BulmaColumnElevenDirective,
  BulmaColumnFiveDirective,
  BulmaColumnFourDirective,
  BulmaColumnFourFifthsDirective,
  BulmaColumnHalfDirective,
  BulmaColumnNineDirective,
  BulmaColumnOneFifthDirective,
  BulmaColumnOneQuarterDirective,
  BulmaColumnOneThirdDirective,
  BulmaColumnSevenDirective,
  BulmaColumnSixDirective,
  BulmaColumnThreeDirective,
  BulmaColumnTenDirective,
  BulmaColumnThreeFifthsDirective,
  BulmaColumnThreeQuartersDirective,
  BulmaColumnTwoDirective,
  BulmaColumnTwoFifthsDirective,
  BulmaColumnTwoThirdsDirective,
  BulmaColumnOffsetEightDirective,
  BulmaColumnOffsetFiveDirective,
  BulmaColumnOffsetFourDirective,
  BulmaColumnOffsetFourFifthsDirective,
  BulmaColumnOffsetNineDirective,
  BulmaColumnOffsetOneDirective,
  BulmaColumnOffsetOneFifthDirective,
  BulmaColumnOffsetOneQuarterDirective,
  BulmaColumnOffsetOneThirdDirective,
  BulmaColumnOffsetSevenDirective,
  BulmaColumnOffsetSixDirective,
  BulmaColumnOffsetTenDirective,
  BulmaColumnOffsetThreeDirective,
  BulmaColumnOffsetThreeFifthsDirective,
  BulmaColumnOffsetThreeQuartersDirective,
  BulmaColumnOffsetTwoDirective,
  BulmaColumnOffsetTwoFifthsDirective,
  BulmaColumnOffsetTwoThirdsDirective,
  BulmaColumnOfsetElevenDirective,
  BulmaColumnOffsetHalfDirective,
  BulmaColumnNarrowDirective,
  BulmaColumnsCenteredDirective,
  BulmaColumnsDesktopDirective,
  BulmaColumnsGaplessDirective,
  BulmaColumnsMobileDirective,
  BulmaColumnsMultilineDirective,
  BulmaColumnsSizeDirective
} from './column';

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
    BulmaUnselectableDirective,
    BulmaBlockDirective,
    BulmaFlexDesktopOnlyDirective,
    BulmaFlexDirective,
    BulmaFlexMobileDirective,
    BulmaFlexTabletOnlyDirective,
    BulmaFlexWidescreenOnlyDirective,
    BulmaInlineBlockDirective,
    BulmaInlineDirective,
    BulmaInlineFlexDirective,
    BulmaFlexDesktopDirective,
    BulmaFlexFullHdDirective,
    BulmaFlexTabletDirective,
    BulmaFlexTouchDirective,
    BulmaFlexWidescreenDirective,
    BulmaHiddenDesktopOnlyDirective,
    BulmaHiddenMobileDirective,
    BulmaHiddenTabletOnlyDirective,
    BulmaHiddenWidescreenOnlyDirective,
    BulmaHiddenDesktopDirective,
    BulmaHiddenFullHdirective,
    BulmaHiddenTabletDirective,
    BulmaHiddenTouchDirective,
    BulmaHiddenWidescreenDirective,
    BulmaTextColorDirective,
    BulmaBackgroundColorDirective,
    BulmaTextCenteredDirective,
    BulmaTextJustifiedDirective,
    BulmaTextLeftDirective,
    BulmaTextRightDirective,
    BulmaTextSizeDirective,
    BulmaUppercaseDirective,
    BulmaCapitalizedDirective,
    BulmaItalicDirective,
    BulmaLowercaseDirective,
    BulmaTextWeightBoldDirective,
    BulmaTextWeightLightDirective,
    BulmaTextWeightNormalDirective,
    BulmaTextWeightSemiboldDirective,
    BulmaColumnComponent,
    BulmaColumnsComponent,
    BulmaColumnEightDirective,
    BulmaColumnElevenDirective,
    BulmaColumnFiveDirective,
    BulmaColumnFourDirective,
    BulmaColumnFourFifthsDirective,
    BulmaColumnHalfDirective,
    BulmaColumnNineDirective,
    BulmaColumnOneFifthDirective,
    BulmaColumnOneQuarterDirective,
    BulmaColumnOneThirdDirective,
    BulmaColumnSevenDirective,
    BulmaColumnSixDirective,
    BulmaColumnThreeDirective,
    BulmaColumnTenDirective,
    BulmaColumnThreeFifthsDirective,
    BulmaColumnThreeQuartersDirective,
    BulmaColumnTwoDirective,
    BulmaColumnTwoFifthsDirective,
    BulmaColumnTwoThirdsDirective,
    BulmaColumnOffsetEightDirective,
    BulmaColumnOffsetFiveDirective,
    BulmaColumnOffsetFourDirective,
    BulmaColumnOffsetFourFifthsDirective,
    BulmaColumnOffsetNineDirective,
    BulmaColumnOffsetOneDirective,
    BulmaColumnOffsetOneFifthDirective,
    BulmaColumnOffsetOneQuarterDirective,
    BulmaColumnOffsetOneThirdDirective,
    BulmaColumnOffsetSevenDirective,
    BulmaColumnOffsetSixDirective,
    BulmaColumnOffsetTenDirective,
    BulmaColumnOffsetThreeDirective,
    BulmaColumnOffsetThreeFifthsDirective,
    BulmaColumnOffsetThreeQuartersDirective,
    BulmaColumnOffsetTwoDirective,
    BulmaColumnOffsetTwoFifthsDirective,
    BulmaColumnOffsetTwoThirdsDirective,
    BulmaColumnOfsetElevenDirective,
    BulmaColumnOffsetHalfDirective,
    BulmaColumnNarrowDirective,
    BulmaColumnsCenteredDirective,
    BulmaColumnsDesktopDirective,
    BulmaColumnsGaplessDirective,
    BulmaColumnsMobileDirective,
    BulmaColumnsMultilineDirective,
    BulmaColumnsSizeDirective
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
    BulmaUnselectableDirective,
    BulmaBlockDirective,
    BulmaFlexDesktopOnlyDirective,
    BulmaFlexDirective,
    BulmaFlexMobileDirective,
    BulmaFlexTabletOnlyDirective,
    BulmaFlexWidescreenOnlyDirective,
    BulmaInlineBlockDirective,
    BulmaInlineDirective,
    BulmaInlineFlexDirective,
    BulmaFlexDesktopDirective,
    BulmaFlexFullHdDirective,
    BulmaFlexTabletDirective,
    BulmaFlexTouchDirective,
    BulmaFlexWidescreenDirective,
    BulmaHiddenDesktopOnlyDirective,
    BulmaHiddenMobileDirective,
    BulmaHiddenTabletOnlyDirective,
    BulmaHiddenWidescreenOnlyDirective,
    BulmaHiddenDesktopDirective,
    BulmaHiddenFullHdirective,
    BulmaHiddenTabletDirective,
    BulmaHiddenTouchDirective,
    BulmaHiddenWidescreenDirective,
    BulmaTextColorDirective,
    BulmaBackgroundColorDirective,
    BulmaTextCenteredDirective,
    BulmaTextJustifiedDirective,
    BulmaTextLeftDirective,
    BulmaTextRightDirective,
    BulmaTextSizeDirective,
    BulmaUppercaseDirective,
    BulmaCapitalizedDirective,
    BulmaItalicDirective,
    BulmaLowercaseDirective,
    BulmaTextWeightBoldDirective,
    BulmaTextWeightLightDirective,
    BulmaTextWeightNormalDirective,
    BulmaTextWeightSemiboldDirective,
    BulmaColumnComponent,
    BulmaColumnsComponent,
    BulmaColumnEightDirective,
    BulmaColumnElevenDirective,
    BulmaColumnFiveDirective,
    BulmaColumnFourDirective,
    BulmaColumnFourFifthsDirective,
    BulmaColumnHalfDirective,
    BulmaColumnNineDirective,
    BulmaColumnOneFifthDirective,
    BulmaColumnOneQuarterDirective,
    BulmaColumnOneThirdDirective,
    BulmaColumnSevenDirective,
    BulmaColumnSixDirective,
    BulmaColumnThreeDirective,
    BulmaColumnTenDirective,
    BulmaColumnThreeFifthsDirective,
    BulmaColumnThreeQuartersDirective,
    BulmaColumnTwoDirective,
    BulmaColumnTwoFifthsDirective,
    BulmaColumnTwoThirdsDirective,
    BulmaColumnOffsetEightDirective,
    BulmaColumnOffsetFiveDirective,
    BulmaColumnOffsetFourDirective,
    BulmaColumnOffsetFourFifthsDirective,
    BulmaColumnOffsetNineDirective,
    BulmaColumnOffsetOneDirective,
    BulmaColumnOffsetOneFifthDirective,
    BulmaColumnOffsetOneQuarterDirective,
    BulmaColumnOffsetOneThirdDirective,
    BulmaColumnOffsetSevenDirective,
    BulmaColumnOffsetSixDirective,
    BulmaColumnOffsetTenDirective,
    BulmaColumnOffsetThreeDirective,
    BulmaColumnOffsetThreeFifthsDirective,
    BulmaColumnOffsetThreeQuartersDirective,
    BulmaColumnOffsetTwoDirective,
    BulmaColumnOffsetTwoFifthsDirective,
    BulmaColumnOffsetTwoThirdsDirective,
    BulmaColumnOfsetElevenDirective,
    BulmaColumnOffsetHalfDirective,
    BulmaColumnNarrowDirective,
    BulmaColumnsCenteredDirective,
    BulmaColumnsDesktopDirective,
    BulmaColumnsGaplessDirective,
    BulmaColumnsMobileDirective,
    BulmaColumnsMultilineDirective,
    BulmaColumnsSizeDirective
  ]
})
export class BulmaModule {}
