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
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityCategoryClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityDraggingCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityDraggingCategoryClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityFocusCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityFocusCategoryClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityActionCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityActionCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"UIAccessibilityFocusedElement"] = ^id(NSString * arg0) {
		return UIAccessibilityFocusedElement(arg0);
	};
	context[@"UIAccessibilityConvertPathToScreenCoordinates"] = ^UIBezierPath *(UIBezierPath * arg0, UIView * arg1) {
		return UIAccessibilityConvertPathToScreenCoordinates(arg0, arg1);
	};
	context[@"UIAccessibilityIsGrayscaleEnabled"] = ^BOOL() {
		return UIAccessibilityIsGrayscaleEnabled();
	};
	context[@"UIAccessibilityConvertFrameToScreenCoordinates"] = ^CGRect(CGRect arg0, UIView * arg1) {
		return UIAccessibilityConvertFrameToScreenCoordinates(arg0, arg1);
	};
	context[@"UIAccessibilityHearingDevicePairedEar"] = ^UIAccessibilityHearingDeviceEar() {
		return UIAccessibilityHearingDevicePairedEar();
	};
	context[@"UIAccessibilityIsSpeakScreenEnabled"] = ^BOOL() {
		return UIAccessibilityIsSpeakScreenEnabled();
	};
	context[@"UIAccessibilityIsAssistiveTouchRunning"] = ^BOOL() {
		return UIAccessibilityIsAssistiveTouchRunning();
	};
	context[@"UIAccessibilityIsBoldTextEnabled"] = ^BOOL() {
		return UIAccessibilityIsBoldTextEnabled();
	};
	context[@"UIAccessibilityIsReduceMotionEnabled"] = ^BOOL() {
		return UIAccessibilityIsReduceMotionEnabled();
	};
	context[@"UIAccessibilityIsReduceTransparencyEnabled"] = ^BOOL() {
		return UIAccessibilityIsReduceTransparencyEnabled();
	};
	context[@"UIAccessibilityIsShakeToUndoEnabled"] = ^BOOL() {
		return UIAccessibilityIsShakeToUndoEnabled();
	};
	context[@"UIAccessibilityIsInvertColorsEnabled"] = ^BOOL() {
		return UIAccessibilityIsInvertColorsEnabled();
	};
	context[@"UIAccessibilityIsClosedCaptioningEnabled"] = ^BOOL() {
		return UIAccessibilityIsClosedCaptioningEnabled();
	};
	context[@"UIAccessibilityIsMonoAudioEnabled"] = ^BOOL() {
		return UIAccessibilityIsMonoAudioEnabled();
	};
	context[@"UIAccessibilityIsSwitchControlRunning"] = ^BOOL() {
		return UIAccessibilityIsSwitchControlRunning();
	};
	context[@"UIAccessibilityIsSpeakSelectionEnabled"] = ^BOOL() {
		return UIAccessibilityIsSpeakSelectionEnabled();
	};
	context[@"UIAccessibilityPostNotification"] = ^void(UIAccessibilityNotifications arg0, id arg1) {
		UIAccessibilityPostNotification(arg0, arg1);
	};
	context[@"UIAccessibilityIsVoiceOverRunning"] = ^BOOL() {
		return UIAccessibilityIsVoiceOverRunning();
	};
	context[@"UIAccessibilityDarkerSystemColorsEnabled"] = ^BOOL() {
		return UIAccessibilityDarkerSystemColorsEnabled();
	};
	context[@"UIAccessibilityIsGuidedAccessEnabled"] = ^BOOL() {
		return UIAccessibilityIsGuidedAccessEnabled();
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAccessibilityScrollDirectionRight"] = @1L;
	context[@"UIAccessibilityScrollDirectionLeft"] = @2L;
	context[@"UIAccessibilityScrollDirectionUp"] = @3L;
	context[@"UIAccessibilityScrollDirectionDown"] = @4L;
	context[@"UIAccessibilityScrollDirectionNext"] = @5L;
	context[@"UIAccessibilityScrollDirectionPrevious"] = @6L;

	context[@"UIAccessibilityHearingDeviceEarNone"] = @0UL;
	context[@"UIAccessibilityHearingDeviceEarLeft"] = @2UL;
	context[@"UIAccessibilityHearingDeviceEarRight"] = @4UL;
	context[@"UIAccessibilityHearingDeviceEarBoth"] = @6UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIAccessibilityInvertColorsStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityInvertColorsStatusDidChangeNotification"] = UIAccessibilityInvertColorsStatusDidChangeNotification;
	p = (void*) &UIAccessibilityReduceTransparencyStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityReduceTransparencyStatusDidChangeNotification"] = UIAccessibilityReduceTransparencyStatusDidChangeNotification;
	p = (void*) &UIAccessibilityReduceMotionStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityReduceMotionStatusDidChangeNotification"] = UIAccessibilityReduceMotionStatusDidChangeNotification;
	p = (void*) &UIAccessibilityGuidedAccessStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityGuidedAccessStatusDidChangeNotification"] = UIAccessibilityGuidedAccessStatusDidChangeNotification;
	p = (void*) &UIAccessibilityAssistiveTouchStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityAssistiveTouchStatusDidChangeNotification"] = UIAccessibilityAssistiveTouchStatusDidChangeNotification;
	p = (void*) &UIAccessibilityBoldTextStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityBoldTextStatusDidChangeNotification"] = UIAccessibilityBoldTextStatusDidChangeNotification;
	p = (void*) &UIAccessibilityVoiceOverStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityVoiceOverStatusDidChangeNotification"] = UIAccessibilityVoiceOverStatusDidChangeNotification;
	p = (void*) &UIAccessibilityMonoAudioStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityMonoAudioStatusDidChangeNotification"] = UIAccessibilityMonoAudioStatusDidChangeNotification;
	p = (void*) &UIAccessibilityDarkerSystemColorsStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityDarkerSystemColorsStatusDidChangeNotification"] = UIAccessibilityDarkerSystemColorsStatusDidChangeNotification;
	p = (void*) &UIAccessibilityHearingDevicePairedEarDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityHearingDevicePairedEarDidChangeNotification"] = UIAccessibilityHearingDevicePairedEarDidChangeNotification;
	p = (void*) &UIAccessibilityShakeToUndoDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityShakeToUndoDidChangeNotification"] = UIAccessibilityShakeToUndoDidChangeNotification;
	p = (void*) &UIAccessibilitySpeakScreenStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilitySpeakScreenStatusDidChangeNotification"] = UIAccessibilitySpeakScreenStatusDidChangeNotification;
	p = (void*) &UIAccessibilitySpeakSelectionStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilitySpeakSelectionStatusDidChangeNotification"] = UIAccessibilitySpeakSelectionStatusDidChangeNotification;
	p = (void*) &UIAccessibilityVoiceOverStatusChanged;
	if (p != NULL) context[@"UIAccessibilityVoiceOverStatusChanged"] = UIAccessibilityVoiceOverStatusChanged;
	p = (void*) &UIAccessibilityClosedCaptioningStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityClosedCaptioningStatusDidChangeNotification"] = UIAccessibilityClosedCaptioningStatusDidChangeNotification;
	p = (void*) &UIAccessibilitySwitchControlStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilitySwitchControlStatusDidChangeNotification"] = UIAccessibilitySwitchControlStatusDidChangeNotification;
	p = (void*) &UIAccessibilityGrayscaleStatusDidChangeNotification;
	if (p != NULL) context[@"UIAccessibilityGrayscaleStatusDidChangeNotification"] = UIAccessibilityGrayscaleStatusDidChangeNotification;
}
void UIKit_UIAccessibilityProtocols()
{
	(void)@protocol(UIAccessibilityReadingContent);
}
void load_UIKit_UIAccessibility_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
