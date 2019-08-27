#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibilityLocationDescriptor_symbols(JSContext*);
@protocol UIAccessibilityLocationDescriptorInstanceExports<JSExport>
@property (readonly,nonatomic) CGPoint point;
@property (readonly,nonatomic,strong) NSAttributedString * attributedName;
@property (readonly,nonatomic,strong) NSString * name;
@property (readonly,nonatomic,weak) UIView * view;
JSExportAs(initWithNameView,
-(id) jsinitWithName: (NSString *) name view: (UIView *) view );
JSExportAs(initWithAttributedNamePointInView,
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName point: (CGPoint) point inView: (UIView *) view );
JSExportAs(initWithNamePointInView,
-(id) jsinitWithName: (NSString *) name point: (CGPoint) point inView: (UIView *) view );
@end
@protocol UIAccessibilityLocationDescriptorClassExports<JSExport>
@end
#pragma clang diagnostic pop