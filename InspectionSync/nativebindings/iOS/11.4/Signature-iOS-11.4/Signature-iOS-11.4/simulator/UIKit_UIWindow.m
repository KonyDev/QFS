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
	class_addProtocol([UIWindow class], @protocol(UIWindowInstanceExports));
	class_addProtocol([UIWindow class], @protocol(UIWindowClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIKeyboardCenterEndUserInfoKey;
	if (p != NULL) context[@"UIKeyboardCenterEndUserInfoKey"] = UIKeyboardCenterEndUserInfoKey;
	p = (void*) &UIWindowLevelStatusBar;
	if (p != NULL) context[@"UIWindowLevelStatusBar"] = @(UIWindowLevelStatusBar);
	p = (void*) &UIWindowDidBecomeVisibleNotification;
	if (p != NULL) context[@"UIWindowDidBecomeVisibleNotification"] = UIWindowDidBecomeVisibleNotification;
	p = (void*) &UIKeyboardDidShowNotification;
	if (p != NULL) context[@"UIKeyboardDidShowNotification"] = UIKeyboardDidShowNotification;
	p = (void*) &UIKeyboardAnimationDurationUserInfoKey;
	if (p != NULL) context[@"UIKeyboardAnimationDurationUserInfoKey"] = UIKeyboardAnimationDurationUserInfoKey;
	p = (void*) &UIWindowDidBecomeKeyNotification;
	if (p != NULL) context[@"UIWindowDidBecomeKeyNotification"] = UIWindowDidBecomeKeyNotification;
	p = (void*) &UIKeyboardDidChangeFrameNotification;
	if (p != NULL) context[@"UIKeyboardDidChangeFrameNotification"] = UIKeyboardDidChangeFrameNotification;
	p = (void*) &UIKeyboardWillChangeFrameNotification;
	if (p != NULL) context[@"UIKeyboardWillChangeFrameNotification"] = UIKeyboardWillChangeFrameNotification;
	p = (void*) &UIKeyboardDidHideNotification;
	if (p != NULL) context[@"UIKeyboardDidHideNotification"] = UIKeyboardDidHideNotification;
	p = (void*) &UIKeyboardBoundsUserInfoKey;
	if (p != NULL) context[@"UIKeyboardBoundsUserInfoKey"] = UIKeyboardBoundsUserInfoKey;
	p = (void*) &UIKeyboardFrameEndUserInfoKey;
	if (p != NULL) context[@"UIKeyboardFrameEndUserInfoKey"] = UIKeyboardFrameEndUserInfoKey;
	p = (void*) &UIKeyboardIsLocalUserInfoKey;
	if (p != NULL) context[@"UIKeyboardIsLocalUserInfoKey"] = UIKeyboardIsLocalUserInfoKey;
	p = (void*) &UIWindowDidBecomeHiddenNotification;
	if (p != NULL) context[@"UIWindowDidBecomeHiddenNotification"] = UIWindowDidBecomeHiddenNotification;
	p = (void*) &UIWindowLevelAlert;
	if (p != NULL) context[@"UIWindowLevelAlert"] = @(UIWindowLevelAlert);
	p = (void*) &UIKeyboardFrameBeginUserInfoKey;
	if (p != NULL) context[@"UIKeyboardFrameBeginUserInfoKey"] = UIKeyboardFrameBeginUserInfoKey;
	p = (void*) &UIKeyboardCenterBeginUserInfoKey;
	if (p != NULL) context[@"UIKeyboardCenterBeginUserInfoKey"] = UIKeyboardCenterBeginUserInfoKey;
	p = (void*) &UIKeyboardWillHideNotification;
	if (p != NULL) context[@"UIKeyboardWillHideNotification"] = UIKeyboardWillHideNotification;
	p = (void*) &UIKeyboardAnimationCurveUserInfoKey;
	if (p != NULL) context[@"UIKeyboardAnimationCurveUserInfoKey"] = UIKeyboardAnimationCurveUserInfoKey;
	p = (void*) &UIWindowLevelNormal;
	if (p != NULL) context[@"UIWindowLevelNormal"] = @(UIWindowLevelNormal);
	p = (void*) &UIWindowDidResignKeyNotification;
	if (p != NULL) context[@"UIWindowDidResignKeyNotification"] = UIWindowDidResignKeyNotification;
	p = (void*) &UIKeyboardWillShowNotification;
	if (p != NULL) context[@"UIKeyboardWillShowNotification"] = UIKeyboardWillShowNotification;
}
void load_UIKit_UIWindow_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
