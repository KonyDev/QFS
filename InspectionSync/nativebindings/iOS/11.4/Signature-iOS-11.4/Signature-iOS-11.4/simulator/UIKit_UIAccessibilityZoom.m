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
	context[@"UIAccessibilityRegisterGestureConflictWithZoom"] = ^void() {
		UIAccessibilityRegisterGestureConflictWithZoom();
	};
	context[@"UIAccessibilityZoomFocusChanged"] = ^void(UIAccessibilityZoomType arg0, CGRect arg1, UIView * arg2) {
		UIAccessibilityZoomFocusChanged(arg0, arg1, arg2);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAccessibilityZoomTypeInsertionPoint"] = @0L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIAccessibilityZoom_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
