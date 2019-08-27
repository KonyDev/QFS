#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIAccessibilityLocationDescriptor (Exports)
-(id) jsinitWithName: (NSString *) name view: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithName: name view: view ] autorelease];
	return resultVal__;
}
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName point: (CGPoint) point inView: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithAttributedName: attributedName point: point inView: view ] autorelease];
	return resultVal__;
}
-(id) jsinitWithName: (NSString *) name point: (CGPoint) point inView: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithName: name point: point inView: view ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIAccessibilityLocationDescriptor class], @protocol(UIAccessibilityLocationDescriptorInstanceExports));
	class_addProtocol([UIAccessibilityLocationDescriptor class], @protocol(UIAccessibilityLocationDescriptorClassExports));
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
void load_UIKit_UIAccessibilityLocationDescriptor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
