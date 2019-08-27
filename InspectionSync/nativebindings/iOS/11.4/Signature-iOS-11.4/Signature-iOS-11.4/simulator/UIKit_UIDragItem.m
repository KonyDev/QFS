#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDragItem (Exports)
-(id) jsinitWithItemProvider: (NSItemProvider *) itemProvider 
{
	id resultVal__;
	resultVal__ = [[self initWithItemProvider: itemProvider ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsPreviewProvider
{
	return [JSValue valueWithObject: self.previewProvider inContext: [JSContext currentContext]];
}
-(void) setJsPreviewProvider: (JSValue *) value
{
	UIDragPreview *  (^ value_)(void) = nil;
	if (!value.isUndefined) {
		value_ = ^UIDragPreview *() {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			JSValue* result = callJSFunction(__jsContext, value, self, parameters);
			return [result toObject];
		};
	}
	self.previewProvider = value_;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDragItem class], @protocol(UIDragItemInstanceExports));
	class_addProtocol([UIDragItem class], @protocol(UIDragItemClassExports));
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
}
void load_UIKit_UIDragItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
