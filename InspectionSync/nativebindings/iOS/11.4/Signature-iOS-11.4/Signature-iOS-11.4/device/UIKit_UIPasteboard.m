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
	class_addProtocol([UIPasteboard class], @protocol(UIPasteboardInstanceExports));
	class_addProtocol([UIPasteboard class], @protocol(UIPasteboardClassExports));
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
	p = (void*) &UIPasteboardRemovedNotification;
	if (p != NULL) context[@"UIPasteboardRemovedNotification"] = UIPasteboardRemovedNotification;
	p = (void*) &UIPasteboardTypeListColor;
	if (p != NULL) context[@"UIPasteboardTypeListColor"] = UIPasteboardTypeListColor;
	p = (void*) &UIPasteboardNameFind;
	if (p != NULL) context[@"UIPasteboardNameFind"] = UIPasteboardNameFind;
	p = (void*) &UIPasteboardTypeAutomatic;
	if (p != NULL) context[@"UIPasteboardTypeAutomatic"] = UIPasteboardTypeAutomatic;
	p = (void*) &UIPasteboardTypeListURL;
	if (p != NULL) context[@"UIPasteboardTypeListURL"] = UIPasteboardTypeListURL;
	p = (void*) &UIPasteboardTypeListString;
	if (p != NULL) context[@"UIPasteboardTypeListString"] = UIPasteboardTypeListString;
	p = (void*) &UIPasteboardOptionExpirationDate;
	if (p != NULL) context[@"UIPasteboardOptionExpirationDate"] = UIPasteboardOptionExpirationDate;
	p = (void*) &UIPasteboardChangedTypesAddedKey;
	if (p != NULL) context[@"UIPasteboardChangedTypesAddedKey"] = UIPasteboardChangedTypesAddedKey;
	p = (void*) &UIPasteboardNameGeneral;
	if (p != NULL) context[@"UIPasteboardNameGeneral"] = UIPasteboardNameGeneral;
	p = (void*) &UIPasteboardTypeListImage;
	if (p != NULL) context[@"UIPasteboardTypeListImage"] = UIPasteboardTypeListImage;
	p = (void*) &UIPasteboardChangedTypesRemovedKey;
	if (p != NULL) context[@"UIPasteboardChangedTypesRemovedKey"] = UIPasteboardChangedTypesRemovedKey;
	p = (void*) &UIPasteboardChangedNotification;
	if (p != NULL) context[@"UIPasteboardChangedNotification"] = UIPasteboardChangedNotification;
	p = (void*) &UIPasteboardOptionLocalOnly;
	if (p != NULL) context[@"UIPasteboardOptionLocalOnly"] = UIPasteboardOptionLocalOnly;
}
void load_UIKit_UIPasteboard_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
