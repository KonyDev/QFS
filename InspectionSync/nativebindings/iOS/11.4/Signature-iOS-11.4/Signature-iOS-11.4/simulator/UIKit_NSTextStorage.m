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
	class_addProtocol([NSTextStorage class], @protocol(NSTextStorageInstanceExports));
	class_addProtocol([NSTextStorage class], @protocol(NSTextStorageClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"NSTextStorageEditedAttributes"] = @1UL;
	context[@"NSTextStorageEditedCharacters"] = @2UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &NSTextStorageWillProcessEditingNotification;
	if (p != NULL) context[@"NSTextStorageWillProcessEditingNotification"] = NSTextStorageWillProcessEditingNotification;
	p = (void*) &NSTextStorageDidProcessEditingNotification;
	if (p != NULL) context[@"NSTextStorageDidProcessEditingNotification"] = NSTextStorageDidProcessEditingNotification;
}
void UIKit_NSTextStorageProtocols()
{
	(void)@protocol(NSTextStorageDelegate);
}
void load_UIKit_NSTextStorage_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
