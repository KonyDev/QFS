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
	class_addProtocol([UIFocusUpdateContext class], @protocol(UIFocusUpdateContextInstanceExports));
	class_addProtocol([UIFocusUpdateContext class], @protocol(UIFocusUpdateContextClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIFocusHeadingNone"] = @0UL;
	context[@"UIFocusHeadingUp"] = @1UL;
	context[@"UIFocusHeadingDown"] = @2UL;
	context[@"UIFocusHeadingLeft"] = @4UL;
	context[@"UIFocusHeadingRight"] = @8UL;
	context[@"UIFocusHeadingNext"] = @16UL;
	context[@"UIFocusHeadingPrevious"] = @32UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIFocusUpdateAnimationCoordinatorKey;
	if (p != NULL) context[@"UIFocusUpdateAnimationCoordinatorKey"] = UIFocusUpdateAnimationCoordinatorKey;
	p = (void*) &UIFocusDidUpdateNotification;
	if (p != NULL) context[@"UIFocusDidUpdateNotification"] = UIFocusDidUpdateNotification;
	p = (void*) &UIFocusUpdateContextKey;
	if (p != NULL) context[@"UIFocusUpdateContextKey"] = UIFocusUpdateContextKey;
	p = (void*) &UIFocusMovementDidFailNotification;
	if (p != NULL) context[@"UIFocusMovementDidFailNotification"] = UIFocusMovementDidFailNotification;
}
void UIKit_UIFocusProtocols()
{
	(void)@protocol(UIFocusEnvironment);
	(void)@protocol(UIFocusItem);
}
void load_UIKit_UIFocus_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
