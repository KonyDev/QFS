#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CTParagraphStyleCreateCopy"] = ^id(id arg0) {
		return CTParagraphStyleCreateCopy(arg0);
	};
	context[@"CTParagraphStyleGetTypeID"] = ^CFTypeID() {
		return CTParagraphStyleGetTypeID();
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCTTextAlignmentLeft"] = @0;
	context[@"kCTTextAlignmentRight"] = @1;
	context[@"kCTTextAlignmentCenter"] = @2;
	context[@"kCTTextAlignmentJustified"] = @3;
	context[@"kCTTextAlignmentNatural"] = @4;
	context[@"kCTLeftTextAlignment"] = @0;
	context[@"kCTRightTextAlignment"] = @1;
	context[@"kCTCenterTextAlignment"] = @2;
	context[@"kCTJustifiedTextAlignment"] = @3;
	context[@"kCTNaturalTextAlignment"] = @4;

	context[@"kCTLineBreakByWordWrapping"] = @0;
	context[@"kCTLineBreakByCharWrapping"] = @1;
	context[@"kCTLineBreakByClipping"] = @2;
	context[@"kCTLineBreakByTruncatingHead"] = @3;
	context[@"kCTLineBreakByTruncatingTail"] = @4;
	context[@"kCTLineBreakByTruncatingMiddle"] = @5;

	context[@"kCTWritingDirectionNatural"] = @-1;
	context[@"kCTWritingDirectionLeftToRight"] = @0;
	context[@"kCTWritingDirectionRightToLeft"] = @1;

	context[@"kCTParagraphStyleSpecifierAlignment"] = @0U;
	context[@"kCTParagraphStyleSpecifierFirstLineHeadIndent"] = @1U;
	context[@"kCTParagraphStyleSpecifierHeadIndent"] = @2U;
	context[@"kCTParagraphStyleSpecifierTailIndent"] = @3U;
	context[@"kCTParagraphStyleSpecifierTabStops"] = @4U;
	context[@"kCTParagraphStyleSpecifierDefaultTabInterval"] = @5U;
	context[@"kCTParagraphStyleSpecifierLineBreakMode"] = @6U;
	context[@"kCTParagraphStyleSpecifierLineHeightMultiple"] = @7U;
	context[@"kCTParagraphStyleSpecifierMaximumLineHeight"] = @8U;
	context[@"kCTParagraphStyleSpecifierMinimumLineHeight"] = @9U;
	context[@"kCTParagraphStyleSpecifierLineSpacing"] = @10U;
	context[@"kCTParagraphStyleSpecifierParagraphSpacing"] = @11U;
	context[@"kCTParagraphStyleSpecifierParagraphSpacingBefore"] = @12U;
	context[@"kCTParagraphStyleSpecifierBaseWritingDirection"] = @13U;
	context[@"kCTParagraphStyleSpecifierMaximumLineSpacing"] = @14U;
	context[@"kCTParagraphStyleSpecifierMinimumLineSpacing"] = @15U;
	context[@"kCTParagraphStyleSpecifierLineSpacingAdjustment"] = @16U;
	context[@"kCTParagraphStyleSpecifierLineBoundsOptions"] = @17U;
	context[@"kCTParagraphStyleSpecifierCount"] = @18U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreText_CTParagraphStyle_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
