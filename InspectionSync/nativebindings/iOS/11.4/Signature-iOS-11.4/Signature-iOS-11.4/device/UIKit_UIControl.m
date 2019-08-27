#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIControl (Exports)
-(void) jsremoveTarget: (id) target action: (NSString *) action forControlEvents: (UIControlEvents) controlEvents 
{
	SEL action_ = NSSelectorFromString(action);
	[self removeTarget: target action: action_ forControlEvents: controlEvents ];
}
-(void) jssendAction: (NSString *) action to: (id) target forEvent: (UIEvent *) event 
{
	SEL action_ = NSSelectorFromString(action);
	[self sendAction: action_ to: target forEvent: event ];
}
-(void) jsaddTarget: (id) target action: (NSString *) action forControlEvents: (UIControlEvents) controlEvents 
{
	SEL action_ = NSSelectorFromString(action);
	[self addTarget: target action: action_ forControlEvents: controlEvents ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIControl class], @protocol(UIControlInstanceExports));
	class_addProtocol([UIControl class], @protocol(UIControlClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIControlEventTouchDown"] = @1U;
	context[@"UIControlEventTouchDownRepeat"] = @2U;
	context[@"UIControlEventTouchDragInside"] = @4U;
	context[@"UIControlEventTouchDragOutside"] = @8U;
	context[@"UIControlEventTouchDragEnter"] = @16U;
	context[@"UIControlEventTouchDragExit"] = @32U;
	context[@"UIControlEventTouchUpInside"] = @64U;
	context[@"UIControlEventTouchUpOutside"] = @128U;
	context[@"UIControlEventTouchCancel"] = @256U;
	context[@"UIControlEventValueChanged"] = @4096U;
	context[@"UIControlEventPrimaryActionTriggered"] = @8192U;
	context[@"UIControlEventEditingDidBegin"] = @65536U;
	context[@"UIControlEventEditingChanged"] = @131072U;
	context[@"UIControlEventEditingDidEnd"] = @262144U;
	context[@"UIControlEventEditingDidEndOnExit"] = @524288U;
	context[@"UIControlEventAllTouchEvents"] = @4095U;
	context[@"UIControlEventAllEditingEvents"] = @983040U;
	context[@"UIControlEventApplicationReserved"] = @251658240U;
	context[@"UIControlEventSystemReserved"] = @-268435456U;
	context[@"UIControlEventAllEvents"] = @-1U;

	context[@"UIControlContentVerticalAlignmentCenter"] = @0;
	context[@"UIControlContentVerticalAlignmentTop"] = @1;
	context[@"UIControlContentVerticalAlignmentBottom"] = @2;
	context[@"UIControlContentVerticalAlignmentFill"] = @3;

	context[@"UIControlContentHorizontalAlignmentCenter"] = @0;
	context[@"UIControlContentHorizontalAlignmentLeft"] = @1;
	context[@"UIControlContentHorizontalAlignmentRight"] = @2;
	context[@"UIControlContentHorizontalAlignmentFill"] = @3;
	context[@"UIControlContentHorizontalAlignmentLeading"] = @4;
	context[@"UIControlContentHorizontalAlignmentTrailing"] = @5;

	context[@"UIControlStateNormal"] = @0U;
	context[@"UIControlStateHighlighted"] = @1U;
	context[@"UIControlStateDisabled"] = @2U;
	context[@"UIControlStateSelected"] = @4U;
	context[@"UIControlStateFocused"] = @8U;
	context[@"UIControlStateApplication"] = @16711680U;
	context[@"UIControlStateReserved"] = @-16777216U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIControl_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
