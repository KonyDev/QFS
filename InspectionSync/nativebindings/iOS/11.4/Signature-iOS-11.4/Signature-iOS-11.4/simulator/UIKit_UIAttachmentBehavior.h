#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAttachmentBehavior_symbols(JSContext*);
@interface JSValue (UIKit_UIAttachmentBehavior)
+(JSValue*) valueWithUIFloatRange: (UIFloatRange) s inContext: (JSContext*) context;
-(UIFloatRange) toUIFloatRange;
@end
@protocol UIAttachmentBehaviorInstanceExports<JSExport>
@property (readwrite,nonatomic) UIFloatRange attachmentRange;
@property (readwrite,nonatomic) CGPoint anchorPoint;
@property (readwrite,nonatomic) CGFloat frictionTorque;
@property (readonly,copy,nonatomic) NSArray * items;
@property (readonly,nonatomic) UIAttachmentBehaviorType attachedBehaviorType;
@property (readwrite,nonatomic) CGFloat length;
@property (readwrite,nonatomic) CGFloat frequency;
@property (readwrite,nonatomic) CGFloat damping;
JSExportAs(initWithItemAttachedToAnchor,
-(id) jsinitWithItem: (id) item attachedToAnchor: (CGPoint) point );
JSExportAs(initWithItemOffsetFromCenterAttachedToItemOffsetFromCenter,
-(id) jsinitWithItem: (id) item1 offsetFromCenter: (UIOffset) offset1 attachedToItem: (id) item2 offsetFromCenter: (UIOffset) offset2 );
JSExportAs(initWithItemOffsetFromCenterAttachedToAnchor,
-(id) jsinitWithItem: (id) item offsetFromCenter: (UIOffset) offset attachedToAnchor: (CGPoint) point );
JSExportAs(initWithItemAttachedToItem,
-(id) jsinitWithItem: (id) item1 attachedToItem: (id) item2 );
@end
@protocol UIAttachmentBehaviorClassExports<JSExport>
+(id) limitAttachmentWithItem: (id) item1 offsetFromCenter: (UIOffset) offset1 attachedToItem: (id) item2 offsetFromCenter: (UIOffset) offset2 ;
+(id) slidingAttachmentWithItem: (id) item1 attachedToItem: (id) item2 attachmentAnchor: (CGPoint) point axisOfTranslation: (CGVector) axis ;
+(id) pinAttachmentWithItem: (id) item1 attachedToItem: (id) item2 attachmentAnchor: (CGPoint) point ;
+(id) slidingAttachmentWithItem: (id) item attachmentAnchor: (CGPoint) point axisOfTranslation: (CGVector) axis ;
+(id) fixedAttachmentWithItem: (id) item1 attachedToItem: (id) item2 attachmentAnchor: (CGPoint) point ;
@end
#pragma clang diagnostic pop