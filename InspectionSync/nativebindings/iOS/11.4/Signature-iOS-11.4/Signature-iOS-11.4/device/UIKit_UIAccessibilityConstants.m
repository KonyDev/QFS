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
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAccessibilityNavigationStyleAutomatic"] = @0;
	context[@"UIAccessibilityNavigationStyleSeparate"] = @1;
	context[@"UIAccessibilityNavigationStyleCombined"] = @2;

	context[@"UIAccessibilityContainerTypeNone"] = @0;
	context[@"UIAccessibilityContainerTypeDataTable"] = @1;
	context[@"UIAccessibilityContainerTypeList"] = @2;
	context[@"UIAccessibilityContainerTypeLandmark"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIAccessibilityTraitUpdatesFrequently;
	if (p != NULL) context[@"UIAccessibilityTraitUpdatesFrequently"] = @(UIAccessibilityTraitUpdatesFrequently);
	p = (void*) &UIAccessibilityNotificationVoiceOverIdentifier;
	if (p != NULL) context[@"UIAccessibilityNotificationVoiceOverIdentifier"] = UIAccessibilityNotificationVoiceOverIdentifier;
	p = (void*) &UIAccessibilityTraitStartsMediaSession;
	if (p != NULL) context[@"UIAccessibilityTraitStartsMediaSession"] = @(UIAccessibilityTraitStartsMediaSession);
	p = (void*) &UIAccessibilityTraitCausesPageTurn;
	if (p != NULL) context[@"UIAccessibilityTraitCausesPageTurn"] = @(UIAccessibilityTraitCausesPageTurn);
	p = (void*) &UIAccessibilityTraitHeader;
	if (p != NULL) context[@"UIAccessibilityTraitHeader"] = @(UIAccessibilityTraitHeader);
	p = (void*) &UIAccessibilityTextAttributeCustom;
	if (p != NULL) context[@"UIAccessibilityTextAttributeCustom"] = UIAccessibilityTextAttributeCustom;
	p = (void*) &UIAccessibilitySpeechAttributeLanguage;
	if (p != NULL) context[@"UIAccessibilitySpeechAttributeLanguage"] = UIAccessibilitySpeechAttributeLanguage;
	p = (void*) &UIAccessibilityTraitLink;
	if (p != NULL) context[@"UIAccessibilityTraitLink"] = @(UIAccessibilityTraitLink);
	p = (void*) &UIAccessibilityPauseAssistiveTechnologyNotification;
	if (p != NULL) context[@"UIAccessibilityPauseAssistiveTechnologyNotification"] = @(UIAccessibilityPauseAssistiveTechnologyNotification);
	p = (void*) &UIAccessibilityTraitSummaryElement;
	if (p != NULL) context[@"UIAccessibilityTraitSummaryElement"] = @(UIAccessibilityTraitSummaryElement);
	p = (void*) &UIAccessibilityUnfocusedElementKey;
	if (p != NULL) context[@"UIAccessibilityUnfocusedElementKey"] = UIAccessibilityUnfocusedElementKey;
	p = (void*) &UIAccessibilityTraitSearchField;
	if (p != NULL) context[@"UIAccessibilityTraitSearchField"] = @(UIAccessibilityTraitSearchField);
	p = (void*) &UIAccessibilitySpeechAttributeQueueAnnouncement;
	if (p != NULL) context[@"UIAccessibilitySpeechAttributeQueueAnnouncement"] = UIAccessibilitySpeechAttributeQueueAnnouncement;
	p = (void*) &UIAccessibilityTraitSelected;
	if (p != NULL) context[@"UIAccessibilityTraitSelected"] = @(UIAccessibilityTraitSelected);
	p = (void*) &UIAccessibilityAnnouncementKeyWasSuccessful;
	if (p != NULL) context[@"UIAccessibilityAnnouncementKeyWasSuccessful"] = UIAccessibilityAnnouncementKeyWasSuccessful;
	p = (void*) &UIAccessibilityResumeAssistiveTechnologyNotification;
	if (p != NULL) context[@"UIAccessibilityResumeAssistiveTechnologyNotification"] = @(UIAccessibilityResumeAssistiveTechnologyNotification);
	p = (void*) &UIAccessibilityTraitNotEnabled;
	if (p != NULL) context[@"UIAccessibilityTraitNotEnabled"] = @(UIAccessibilityTraitNotEnabled);
	p = (void*) &UIAccessibilityTextAttributeHeadingLevel;
	if (p != NULL) context[@"UIAccessibilityTextAttributeHeadingLevel"] = UIAccessibilityTextAttributeHeadingLevel;
	p = (void*) &UIAccessibilityTraitImage;
	if (p != NULL) context[@"UIAccessibilityTraitImage"] = @(UIAccessibilityTraitImage);
	p = (void*) &UIAccessibilityAnnouncementKeyStringValue;
	if (p != NULL) context[@"UIAccessibilityAnnouncementKeyStringValue"] = UIAccessibilityAnnouncementKeyStringValue;
	p = (void*) &UIAccessibilityTraitButton;
	if (p != NULL) context[@"UIAccessibilityTraitButton"] = @(UIAccessibilityTraitButton);
	p = (void*) &UIAccessibilityTraitAdjustable;
	if (p != NULL) context[@"UIAccessibilityTraitAdjustable"] = @(UIAccessibilityTraitAdjustable);
	p = (void*) &UIAccessibilityScreenChangedNotification;
	if (p != NULL) context[@"UIAccessibilityScreenChangedNotification"] = @(UIAccessibilityScreenChangedNotification);
	p = (void*) &UIAccessibilityTraitStaticText;
	if (p != NULL) context[@"UIAccessibilityTraitStaticText"] = @(UIAccessibilityTraitStaticText);
	p = (void*) &UIAccessibilitySpeechAttributeIPANotation;
	if (p != NULL) context[@"UIAccessibilitySpeechAttributeIPANotation"] = UIAccessibilitySpeechAttributeIPANotation;
	p = (void*) &UIAccessibilityTraitAllowsDirectInteraction;
	if (p != NULL) context[@"UIAccessibilityTraitAllowsDirectInteraction"] = @(UIAccessibilityTraitAllowsDirectInteraction);
	p = (void*) &UIAccessibilityAnnouncementDidFinishNotification;
	if (p != NULL) context[@"UIAccessibilityAnnouncementDidFinishNotification"] = UIAccessibilityAnnouncementDidFinishNotification;
	p = (void*) &UIAccessibilityNotificationSwitchControlIdentifier;
	if (p != NULL) context[@"UIAccessibilityNotificationSwitchControlIdentifier"] = UIAccessibilityNotificationSwitchControlIdentifier;
	p = (void*) &UIAccessibilityAssistiveTechnologyKey;
	if (p != NULL) context[@"UIAccessibilityAssistiveTechnologyKey"] = UIAccessibilityAssistiveTechnologyKey;
	p = (void*) &UIAccessibilityTraitTabBar;
	if (p != NULL) context[@"UIAccessibilityTraitTabBar"] = @(UIAccessibilityTraitTabBar);
	p = (void*) &UIAccessibilityPageScrolledNotification;
	if (p != NULL) context[@"UIAccessibilityPageScrolledNotification"] = @(UIAccessibilityPageScrolledNotification);
	p = (void*) &UIAccessibilityFocusedElementKey;
	if (p != NULL) context[@"UIAccessibilityFocusedElementKey"] = UIAccessibilityFocusedElementKey;
	p = (void*) &UIAccessibilityTraitPlaysSound;
	if (p != NULL) context[@"UIAccessibilityTraitPlaysSound"] = @(UIAccessibilityTraitPlaysSound);
	p = (void*) &UIAccessibilitySpeechAttributePitch;
	if (p != NULL) context[@"UIAccessibilitySpeechAttributePitch"] = UIAccessibilitySpeechAttributePitch;
	p = (void*) &UIAccessibilityTraitNone;
	if (p != NULL) context[@"UIAccessibilityTraitNone"] = @(UIAccessibilityTraitNone);
	p = (void*) &UIAccessibilityAnnouncementNotification;
	if (p != NULL) context[@"UIAccessibilityAnnouncementNotification"] = @(UIAccessibilityAnnouncementNotification);
	p = (void*) &UIAccessibilityTraitKeyboardKey;
	if (p != NULL) context[@"UIAccessibilityTraitKeyboardKey"] = @(UIAccessibilityTraitKeyboardKey);
	p = (void*) &UIAccessibilityElementFocusedNotification;
	if (p != NULL) context[@"UIAccessibilityElementFocusedNotification"] = UIAccessibilityElementFocusedNotification;
	p = (void*) &UIAccessibilitySpeechAttributePunctuation;
	if (p != NULL) context[@"UIAccessibilitySpeechAttributePunctuation"] = UIAccessibilitySpeechAttributePunctuation;
	p = (void*) &UIAccessibilityLayoutChangedNotification;
	if (p != NULL) context[@"UIAccessibilityLayoutChangedNotification"] = @(UIAccessibilityLayoutChangedNotification);
}
void load_UIKit_UIAccessibilityConstants_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
