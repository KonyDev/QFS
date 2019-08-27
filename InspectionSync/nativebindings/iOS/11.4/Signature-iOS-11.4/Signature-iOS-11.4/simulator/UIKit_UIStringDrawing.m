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
	class_addProtocol([NSString class], @protocol(NSStringUIStringDrawingCategoryInstanceExports));
	class_addProtocol([NSString class], @protocol(NSStringUIStringDrawingCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UILineBreakModeWordWrap"] = @0L;
	context[@"UILineBreakModeCharacterWrap"] = @1L;
	context[@"UILineBreakModeClip"] = @2L;
	context[@"UILineBreakModeHeadTruncation"] = @3L;
	context[@"UILineBreakModeTailTruncation"] = @4L;
	context[@"UILineBreakModeMiddleTruncation"] = @5L;

	context[@"UITextAlignmentLeft"] = @0L;
	context[@"UITextAlignmentCenter"] = @1L;
	context[@"UITextAlignmentRight"] = @2L;

	context[@"UIBaselineAdjustmentAlignBaselines"] = @0L;
	context[@"UIBaselineAdjustmentAlignCenters"] = @1L;
	context[@"UIBaselineAdjustmentNone"] = @2L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UITextAttributeTextShadowOffset;
	if (p != NULL) context[@"UITextAttributeTextShadowOffset"] = UITextAttributeTextShadowOffset;
	p = (void*) &UITextAttributeFont;
	if (p != NULL) context[@"UITextAttributeFont"] = UITextAttributeFont;
	p = (void*) &UITextAttributeTextShadowColor;
	if (p != NULL) context[@"UITextAttributeTextShadowColor"] = UITextAttributeTextShadowColor;
	p = (void*) &UITextAttributeTextColor;
	if (p != NULL) context[@"UITextAttributeTextColor"] = UITextAttributeTextColor;
}
void load_UIKit_UIStringDrawing_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
