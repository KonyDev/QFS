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
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIApplicationStateRestorationTimestampKey;
	if (p != NULL) context[@"UIApplicationStateRestorationTimestampKey"] = UIApplicationStateRestorationTimestampKey;
	p = (void*) &UIApplicationStateRestorationBundleVersionKey;
	if (p != NULL) context[@"UIApplicationStateRestorationBundleVersionKey"] = UIApplicationStateRestorationBundleVersionKey;
	p = (void*) &UIApplicationStateRestorationSystemVersionKey;
	if (p != NULL) context[@"UIApplicationStateRestorationSystemVersionKey"] = UIApplicationStateRestorationSystemVersionKey;
	p = (void*) &UIStateRestorationViewControllerStoryboardKey;
	if (p != NULL) context[@"UIStateRestorationViewControllerStoryboardKey"] = UIStateRestorationViewControllerStoryboardKey;
	p = (void*) &UIApplicationStateRestorationUserInterfaceIdiomKey;
	if (p != NULL) context[@"UIApplicationStateRestorationUserInterfaceIdiomKey"] = UIApplicationStateRestorationUserInterfaceIdiomKey;
}
void UIKit_UIStateRestorationProtocols()
{
	(void)@protocol(UIObjectRestoration);
	(void)@protocol(UIViewControllerRestoration);
	(void)@protocol(UIStateRestoring);
	(void)@protocol(UIDataSourceModelAssociation);
}
void load_UIKit_UIStateRestoration_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
